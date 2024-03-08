import React, {useState} from 'react'
import {auth, db} from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
//import { writeUserData } from "../../firebase";
import AuthDetails from "./AuthDetails";
import {useRegister} from "../../hooks/auth";
import { useForm } from "react-hook-form";
import {HOMEPAGE} from "../../routes";
import {emailValidate, passwordValidate, usernameValidate} from "../../utils/FormValidate";

export default function SignUp(){
 /*   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  */
        const { register: signup, isLoading } = useRegister();
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        async function handleRegister(data) {
            signup({
                username: data.username,
                email: data.email,
                password: data.password,
                redirectTo: HOMEPAGE,
            });
        }
/*    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
        const userName = email.split("@")
        writeUserData(userName[0], email, "posts");
    }

 */
    return (

        <div className='sign-up-container'>
            <form onSubmit={handleSubmit(handleRegister)}>

                <h1>Create Your Account</h1>
                <div className='sub-head' >Username
                    <input
                        placeholder={"Enter your username"}
                      //  value={username}
                        {...register("username", usernameValidate)}

                        //    onChange={(e) => setEmail(e.target.value)}
                        className="input-style"
                    />
                </div>
                <div className='sub-head' >Email
                <input
                    type={"email"}
                    placeholder={"Enter your email"}
               //     value={email}
                    {...register("email", emailValidate)}
                   // onChange={(e) => setEmail(e.target.value)}
                    className="input-style"
                />
                </div>
                <div className='sub-head' >Password
                <input
                    type={"password"}
                    placeholder={"Enter your password"}
              //      value={password}
                    {...register("password", passwordValidate)}
                 //   onChange={(e) => setPassword(e.target.value)}
                    className="input-style"
                />

                <button type={"submit"} className="button-style" >Sign Up</button>
                </div>
            </form>
            <div className="AuthDet">
                <AuthDetails />
            </div>
        </div>

    );
};

