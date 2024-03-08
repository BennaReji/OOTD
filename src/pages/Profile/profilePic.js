import { Link } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import {USERPAGE} from "../../routes";

export default function profilePic(user, size, override=null){
    return(
        <MainLayout>
            <div className="userProfilePic">
                <img src={user.avatar} alt="Profile pic"/>
                <Link to={`${USERPAGE}/${user.id}`}/>
            </div>
        </MainLayout>
    )
}