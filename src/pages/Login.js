import React, {useState} from 'react';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Navbar from "../components/Navbar";

import BottomBar from "../components/BottomBar";

const Login = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
    };
    return (
        <div className="Login-format">
            <nav className="Login-nav">
                <Navbar />
            </nav>
                <div className='Main-head'>
                    <h1>OOTD</h1>
                    Connecting people through fashion.
                </div>
                <div className='Main-Login'>
                        {!index ? <SignIn/> : <SignUp/>}
                    <div className="newUserLink">
                        <p onClick={toggleIndex}>
                            {!index ? "New user? Click here " : "Already have an account?"}
                        </p>
                    </div>
                </div>
            <BottomBar />
            </div>
    );
}

export default Login;
