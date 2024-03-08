import React, {Fragment, useEffect, useState} from 'react';
import MainLayout from '../../Layout/MainLayout';
import { useParams } from 'react-router-dom';
import { UseAuth } from '../../hooks/auth';
import {
    getFirestore,
    doc,
    updateDoc, getDoc, collection, query, getDocs, where,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


function UserPage() {
    const { id } = useParams();
    console.log(id);
    // const {user, isLoading } = UseAuth();
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [message, setMessage] = useState('');
    const [images, setImages] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [showAllComments, setShowAllComments] = useState(false);
    const [activePostId, setActivePostId] = useState(null);
    const firestore = getFirestore();
    const storage = getStorage();
    const hasAvatar = images.length > 0;


    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userDocRef = doc(firestore, 'users', id);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();
                    setName(userData.name);
                    setBio(userData.bio);
                    if (userData.avatar) {
                        setImages([userData.avatar]);
                    }
                }
            } catch (error) {
                console.log('Error fetching user details:', error);
            }
        };
        const fetchUserPosts = async () => {
            try {
                const userPostsRef = collection(firestore, 'posts');
                const userPostsQuery = query(userPostsRef, where('uid', '==', id));
                const userPostsSnapshot = await getDocs(userPostsQuery);

                const postPromises = userPostsSnapshot.docs.map(async (doc) => {
                    const postData = doc.data();
                    const imageRef = ref(storage, postData.imageUrl);
                    const downloadURL = await getDownloadURL(imageRef);

                    const comments = postData.comments || [];

                    return {
                        id: doc.id,
                        url: downloadURL,
                        comments: comments,
                        description: postData.description,
                    };
                });

                const userPostsData = await Promise.all(postPromises);

                setUserPosts(userPostsData);
            } catch (error) {
                console.log('Error fetching user posts:', error);
            }
        };





        fetchUserDetails();
        fetchUserPosts();
    }, [firestore, id]);



    const handleEditClick = () => {
        setEditMode(!editMode);
    };
    const handleCommentClick = (postId) => {
        if (activePostId === postId) {
            setActivePostId(null);
            setShowAllComments(false);
        } else {
            setActivePostId(postId);
            setShowAllComments(true);
        }
    };
    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = handleFileInputChange;
        input.click();
    };

    const handleFileInputChange = async (event) => {
        const files = event.target.files;
        const file = files[0];
        const imageRef = ref(storage, `avatars/${id}`);
        await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(imageRef);
        setMessage('Avatar updated!');
        setImages([...images, downloadURL]);

        try {
            const userDocRef = doc(firestore, 'users', id);
            await updateDoc(userDocRef, {
                avatar: downloadURL,
            });
            setMessage('Avatar and account updated!');
        } catch (error) {
            console.log('Error updating user:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('Name updated!');
        setEditMode(false);
        try {
            const userDocRef = doc(firestore, 'users', id);
            await updateDoc(userDocRef, {
                name: name,
                bio: bio,
            });
            setMessage('');
        } catch (error) {
            console.log('Error updating user:', error);
        }
    };
    const sortedPosts = userPosts.sort((a, b) => b.createdAt - a.createdAt);// not sure if this works


    //  <img src={user.avatar} alt={"User profile pic"}/>
    return (
        <MainLayout>
            <div className="profile">
                <div className="userProfilePic">
                    <button onClick={handleImageUpload}>
                        {hasAvatar ? null : 'Upload Avatar'}
                    </button>
                    {images.map((image, index) => (
                        <img src={image} alt="user uploaded" key={index} />
                    ))}
                </div>

                <div className="userNameAndBio">
                    {editMode ? (
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Bio:
                                <input
                                    type="text"
                                    placeholder={'Your Bio'}
                                    value={bio}
                                    onChange={(event) => setBio(event.target.value)}
                                />
                            </label>
                            <br />
                            <button type="submit">Save</button>
                        </form>
                    ) : (
                        <>
                            <div className="userProfileName"> {name}</div>
                            <div className="userProfileBio"> {bio}</div>
                        </>
                    )}
                    {message && <div className="updateBioMessage">{message}</div>}
                </div>
                <div className="edit-profile">
                    <button onClick={handleEditClick}>
                        {editMode ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>
                <div className="user-post">
                    <div className="postSign">
                        <h4>Posts</h4>
                    </div>
                    <div className="userPostPicHolder">
                        {sortedPosts.map((post) => (
                            <Fragment key={post.id}>
                                <div className="profileEachPic">
                                    <img src={post.url} alt="Post" />
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default UserPage;
