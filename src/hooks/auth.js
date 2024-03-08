import { useAuthState} from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import {useEffect, useState} from "react";
import {HOMEPAGE} from "../routes";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import isUsernameExists from "../utils/isUsernameExists";
export function UseAuth(){
    const [authUser, authLoading, error] = useAuthState(auth);
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const ref = doc(db, "users", authUser.uid);
            const docSnap = await getDoc(ref);
            setUser(docSnap.data());
            setLoading(false);
        }

        if (!authLoading) {
            if (authUser) fetchData();
            else setLoading(false); // Not signed in
        }
    }, [authLoading]);

    return { user, isLoading, error };
    }

export function useRegister() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function register({
        username,
        email,
        password,
        redirectTo = HOMEPAGE
    }){
        setLoading(true);
        const usernameExists = await isUsernameExists(username)
        if (usernameExists) {
            alert("Username already exists, please try another");
            setLoading(false);
        } else {
            try{
                const res = await createUserWithEmailAndPassword(auth, email, password)

                await setDoc(doc(db, "users", res.user.uid), {
                    id: res.user.uid,
                    username: username.toLowerCase(),
                    avatar: "",
                    date: Date.now(),
                })
                alert("Signed in!");
                navigate(redirectTo);
            } catch (error){
                alert("Sign up failed");
            }
        }

    }
    return {register, isLoading};
}
export function useLogin() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function login({ email, password, redirectTo = HOMEPAGE }) {
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("You are logged in!")
            navigate(redirectTo);
        } catch (error) {
            alert("Login Failed");
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    return { login, isLoading };
}