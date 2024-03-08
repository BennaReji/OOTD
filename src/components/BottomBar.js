import {Link} from "react-router-dom";
import React from "react";
import {HiHome, HiOutlineLightBulb, HiOutlineUserCircle, HiUserGroup} from "react-icons/hi";
import {BiAddToQueue} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";
import { UseAuth } from "../hooks/auth";
import {HOMEPAGE, ABOUTUS, CREATEPOST, LOGIN, SETTINGS, USERPAGE} from "../routes";

function BottomBar() {
    const { user, isLoading } = UseAuth();
    if (isLoading) return "Loading...";
    let userPage = LOGIN;
    if (user != null){
        userPage = `${USERPAGE}/${user.id}`;
    }
    return (
        <div className='botNavbar'>
            <ul className = 'botNavbarMenu'>
                <li><Link to={HOMEPAGE}><HiHome/>Home</Link> </li>
                <li><Link to={CREATEPOST}><BiAddToQueue/>Create</Link></li>
                <li><Link to={userPage}><HiOutlineUserCircle/>Profile</Link></li>
                <li><Link to={SETTINGS}><AiOutlineSetting/>Settings</Link></li>
                <li><Link to={ABOUTUS}><HiUserGroup/>About Us</Link> </li>
            </ul>
        </div>
    );
}
export default BottomBar;