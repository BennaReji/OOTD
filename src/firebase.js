// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getStorage, listAll} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
    apiKey: "AIzaSyAmsUXs-lqPesIm1ZZgDSFBjSNJw6Mw3_U",
    authDomain: "ootd2-2850d.firebaseapp.com",
    databaseURL: "https://ootd2-2850d-default-rtdb.firebaseio.com",
    projectId: "ootd2-2850d",
    storageBucket: "ootd2-2850d.appspot.com",
    messagingSenderId: "861372681150",
    appId: "1:861372681150:web:f1b154b9f5a37aab0587ef",
    measurementId: "G-D6LL40KQLP"
};

// Initialize Firebase
const app = initializeApp(firebase);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage(app)
export const db = getFirestore(app);
/*
export function writeUserData(userID, email, posts ) {
    const db = getDatabase();
    const reference = ref(db, "users/" + userID);          //change email back to userID
    const postRef = ref(db, "users/" + userID + "/" + posts ) //same here
   // const imagesRef = ref(storage, 'posts');

    set(reference, {
        email:email
    });
    set(postRef, {
    });
}
writeUserData("newUser", "robert@gmail.com", "userPosts");
export function writeUserPost(userID, posts, imgUrl){
    const db = getDatabase();
    const reference = ref(db, "users/"+ userID + "/" + posts)
    set(reference, {
        post: imgUrl,
    });
}


 */


