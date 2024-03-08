import MainLayout from "../../Layout/MainLayout";
import {Link} from "react-router-dom";

function Settings(){
    return(
        <MainLayout>
            <div className="settingTitle">
                <h1> Settings </h1>
                <br></br>
                <div className = "documentation">
                    <button><Link to="/UserGuide"> User Guide</Link></button>
                    <button><Link to="/SystemsGuide"> System Manual </Link></button>
                    <button><Link to="/DataPrivacy"> Data Privacy </Link></button>
                </div>
            </div>
        </MainLayout>
    );
}

export default Settings;

/* to be later implemented (above return)
const [pushNotification, setPushNotification] = useState(true);
const [pauseAll, setPauseAll] = useState(false);
const [postNotification, setPostNotification] = useState(true);
const [followRequest, setFollowRequest] = useState(true);
const [likesNotification, setLikesNotification] = useState(true);
const [commentsNotification, setCommentsNotification] = useState(true);

const handlePushNotificationChange = (event) => {
    setPushNotification(event.target.checked);
}

const handlePauseAllChange = (event) => {
    setPauseAll(event.target.checked);
}

const handlePostNotificationChange = (event) => {
    setPostNotification(event.target.checked);
}

const handleFollowRequestChange = (event) => {
    setFollowRequest(event.target.checked);
}

const handleLikesNotificationChange = (event) => {
    setLikesNotification(event.target.checked);
}

const handleCommentsNotificationChange = (event) => {
    setCommentsNotification(event.target.checked);
}

to be later implemented in return statement (to be implemented after the documentation div)
<div>
        <h1>Notifications</h1>
        <div className="notification-box">
            <div>Push Notifications:</div>
                <Switch checked={pushNotification} onChange={handlePushNotificationChange} />
        </div>
        <div className="notification-box">
            <div>Pause All:</div>
            <Switch checked={pauseAll} onChange={handlePauseAllChange} />
        </div>
        <div className="notification-box">
            <div>Post:</div>
            <Switch checked={postNotification} onChange={handlePostNotificationChange} />
        </div>
        <div className="notification-box">
            <div>Follow Request:</div>
            <Switch checked={followRequest} onChange={handleFollowRequestChange} />
        </div>
        <div className="notification-box" >
            <div>Likes:</div>
            <Switch checked={likesNotification} onChange={handleLikesNotificationChange} />
        </div>
        <div className="notification-box">
            <div>Comments:</div>
            <Switch checked={commentsNotification} onChange={handleCommentsNotificationChange} />
        </div>
        </div>
        */