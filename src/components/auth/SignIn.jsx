import React, {useState} from 'react'
import {auth} from "../../firebase";
import {signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import AuthDetails from "./AuthDetails";
import {useLogin} from "../../hooks/auth";
import {useForm} from "react-hook-form";
import {HOMEPAGE} from "../../routes";
import {emailValidate, passwordValidate} from "../../utils/FormValidate";


export default function SignIn () {
  //  const [email, setEmail] = useState('');
  //  const [password, setPassword] = useState('');
    const { login } = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
 /*   const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
        })
    }

*/
    const handleForgotPassword = () => {
        const email = prompt("Please enter your email: ")

        if (email !== null && email !== "") {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password reset email has been sent. Please check your inbox.");
                })
                .catch((error) => {
                    alert("Error: " + error.message)
                });
        }
    };

    async function handleLogin(data) {
        login({
            email: data.email,
            password: data.password,
            redirectTo: HOMEPAGE,
        });
    }
  return (

        <div className='sign-in-container'>
            <form onSubmit={handleSubmit(handleLogin)}>
                <h1>Log In</h1>
                <div className='sub-head'>Email
                <input
                    type={"email"}
                    placeholder={"Enter your email"}
             //       value={email}
             //       onChange={(e) => setEmail(e.target.value)}
                    {...register("email", emailValidate)}
                    className="input-style"
                />
                </div>
                <div className='sub-head' >Password
                <input
                    type={"password"}
                    placeholder={"Enter your password"}
            //        value={password}
           //         onChange={(e) => setPassword(e.target.value)}
                    {...register("password", passwordValidate)}
                    className="input-style"
                />

                <button  type={"submit"} className="button-style" >Log In</button>
                </div>
            </form>
            <button
                onClick={handleForgotPassword} className={"forgot-password-button"}
            >
                Forgot Password
            </button>
            <div className="AuthDet">
                <AuthDetails />
            </div>
        </div>
    );
};

