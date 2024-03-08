import React, { useState, useEffect } from "react";
import MainLayout from '../Layout/MainLayout';
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { getAuth } from "firebase/auth";
import { GrAddCircle } from "react-icons/gr";
import {UseAuth} from "../hooks/auth";
import {useForm} from "react-hook-form";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";


export default function CreatePost() {
    const auth = getAuth();
    const firestore = getFirestore();
    const {user, isLoading: authLoading} = UseAuth();
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "Posts/");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const uploadImage = () => {
        if(imageUpload == null) return;
        const imgUrl = `Posts/${imageUpload.name +v4()}`;
        const imageRef = ref(storage, imgUrl)
        const user = auth.currentUser;
        if (!user) {
            console.log("User not logged in");
            return;
        }

        const uid = user.uid;
        const postRef = collection(firestore, "posts");

        const newPost = {
            createdAt: serverTimestamp(),
            uid: uid,
            likeCount: [],
            imageUrl: imgUrl,
            comments: [],
            description: watch("clothingLinks"),
        };

        addDoc(postRef, newPost)
            .then((docRef) => {
                console.log("New post added with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding post: ", error);
            });
        uploadBytes(imageRef, imageUpload).then(() => {
            setImageUpload(null);
               });
           };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
         setImageUpload(file);

        const reader = new FileReader();
        reader.onload = () => {
            const previewImage = document.getElementById("preview-image");
            previewImage.src = reader.result;
        };
        reader.readAsDataURL(file);
    };

       useEffect(() => {
           listAll(imageListRef).then((response) => {
               response.items.forEach((item) => {
                   getDownloadURL(item).then((url) => {
                       setImageList((prev) => [...prev, url]);
                   });
               });
           });
       }, []);

    return (
        <MainLayout>
            <div className="MainPage">
                <div className="create-post">
                    <div className="createPostSub">
                        <div className="header">Create new Post</div>
                        <div className="createButton">
                            <label htmlFor="upload-image">
                                <GrAddCircle/>
                            </label>
                        </div>
                        <input
                            type="file"
                            id="upload-image"
                            onChange={handleImageUpload}
                            style={{display: "none"}}
                        />
                        <div className="previewPicture">
                            {imageUpload && (
                                <img
                                    src=""
                                    alt="uploadimage"
                                    className="uploaded-image"
                                    id="preview-image"
                                />
                            )}

                        </div>
                        {imageUpload && (
                            // this is for the caption input
                            <div className="clothingLinks">
                            <textarea
                            rows={4} // Set the number of visible rows
                            placeholder="Enter clothing links and captions"
                            {...register('clothingLinks')}
                            />
                            </div>
                            )}
                        <div className="postButton">
                            <button onClick={uploadImage}>POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );


}
