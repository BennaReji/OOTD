import MainLayout from "../Layout/MainLayout";
import React, { useState, useEffect } from "react";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    updateDoc
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "../App.css";
import { AiOutlineHeart, AiFillHeart, AiOutlineSend } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { Fragment } from "react";
import { v4 as uuid } from "uuid";
import {UseAuth} from "../hooks/auth";

function Homepage() {
    const [posts, setPosts] = useState([]);
    const [activePostId, setActivePostId] = useState(null);
    const [commentText, setCommentText] = useState("");
    const [showAllComments, setShowAllComments] = useState(false);
    const {user, isLoading} = UseAuth();
    const firestore = getFirestore();
    const postsCollectionRef = collection(firestore, "posts");
    const usersCollectionRef = collection(firestore, "users");
    const storage = getStorage();

    const handleLikeClick = async (postId) => {
        try {
            const updatedPosts = posts.map((post) => {
                if (post.id === postId) {
                    const isLikedByUser = post.likeCount.includes(user.id);
                    const updatedLikeCount = isLikedByUser
                        ? post.likeCount.filter((userId) => userId !== user.id)
                        : [...post.likeCount, user.id];

                    return {
                        ...post,
                        likeCount: updatedLikeCount,
                        likes: updatedLikeCount.length,
                        liked: !isLikedByUser,
                    };
                }
                return post;
            });

            setPosts(updatedPosts);

            const postRef = doc(firestore, 'posts', postId);
            await updateDoc(postRef, {
                likeCount: updatedPosts.find((post) => post.id === postId).likeCount,
                likes: updatedPosts.find((post) => post.id === postId).likeCount.length,
            });
        } catch (error) {
            console.log('Error handling like:', error);
        }
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

    const handleCommentInputChange = (event) => {
        setCommentText(event.target.value);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const querySnapshot = await getDocs(postsCollectionRef);
                const fetchedPosts = [];

                for (const docSnap of querySnapshot.docs) {
                    const postData = docSnap.data();
                    const userId = postData.uid;

                    const userDocSnap = await getDoc(doc(usersCollectionRef, userId));
                    const userData = userDocSnap.data();
                    const username = userData.username;

                    const imageRef = ref(storage, postData.imageUrl);
                    const downloadURL = await getDownloadURL(imageRef);

                    let isLikedByUser = false;
                    let likeCount = 0;

                    if (user) {
                        isLikedByUser = postData.likeCount.includes(user.id);
                    }
                    const post = {
                        id: docSnap.id,
                        liked: isLikedByUser,
                        url: downloadURL,
                        comments: postData.comments,
                        description: postData.description,
                        likes: postData.likeCount.length,
                        uid: userId,
                        username: username,
                        likeCount: postData.likeCount || [],
                    };

                    fetchedPosts.push(post);
                }

                console.log(fetchedPosts);
                setPosts(fetchedPosts);
            } catch (error) {
                console.log("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, [user]);

    const handleCommentAdd = async (postId, e) => {
        e.preventDefault();

        try {
            const post = posts.find((post) => post.id === postId);

            if (post) {
                const userDocRef = doc(firestore, "users", post.uid);
                const userDocSnap = await getDoc(userDocRef);
                const userData = userDocSnap.data();

                const newComment = {
                    id: uuid(),
                    text: commentText,
                    author: user.username,
                };

                const updatedComments = [...post.comments, newComment];

                await updateDoc(doc(firestore, "posts", post.id), {
                    comments: updatedComments,
                });

                const updatedPosts = posts.map((p) => {
                    if (p.id === postId) {
                        return {
                            ...p,
                            comments: updatedComments,
                        };
                    }
                    return p;
                });
                setPosts(updatedPosts);
                setActivePostId(null);
                setCommentText("");
                setShowAllComments(false);

                console.log("Comment added successfully!");
            }
        } catch (error) {
            console.log("Error adding comment:", error);
        }
    };

    return (
        <MainLayout>
            <div className="MainPage">
                <div className="holder">
                    {posts.map((post) => (
                        <Fragment key={post.id}>
                            <div className="eachPic">
                                <div className="username">{post.username}</div>
                                <img src={post.url} alt="Post" />
                                <div className="like-comment">
                                    <button onClick={() => handleLikeClick(post.id)}>
                                        {post.liked ? <AiFillHeart style={{ color: "red" }}/> : <AiOutlineHeart />}
                                        {post.likes}
                                    </button>

                                    <button onClick={() => handleCommentClick(post.id)}>
                                        <BiCommentDetail />
                                    </button>
                                </div>
                                {activePostId === post.id && (
                                    <div className="commentPopup">
                                        <form onSubmit={(e) => handleCommentAdd(post.id, e)}>
                                            <label>
                                                <input
                                                    placeholder="Enter Comment Here"
                                                    value={commentText}
                                                    onChange={handleCommentInputChange}
                                                />
                                            </label>
                                            <button type="submit">
                                                <AiOutlineSend />
                                            </button>
                                        </form>
                                    </div>
                                )}
                                <div className="caption">
                                    {post.description}
                                </div>

                                <div className="comments">
                                    {post.comments
                                        .slice(0, showAllComments ? post.comments.length : 3)
                                        .map((comment) => (
                                            <div key={comment.id} className="comment">
                                                <span className="comment-author">{comment.author}: </span>
                                                <span className="comment-text">{comment.text}</span>
                                            </div>
                                        ))}
                                    {!showAllComments && post.comments.length > 3 && (
                                        <div
                                            className="view-all-comments"
                                            onClick={() => handleCommentClick(post.id)}
                                        >
                                            View all comments ({post.comments.length})
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
export default Homepage;