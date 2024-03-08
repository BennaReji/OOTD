import React from 'react'
import MainLayout from "../Layout/MainLayout";

function NotificationPage() {
    return (
        <MainLayout>
            <div className="MainPage">
                <div className = "NotificationTitle">
                    <h1>Notifications</h1>
                </div>
            <div className="notificationHolder">
                <div className="notificationBox">
                <div className="likedPost ">
                    <div className="userCircle"></div>
                    <div className= "notificationUsername">
                        "Name": Like your "picture"</div>
                </div>
            </div>
            <div className="notificationBox">
                <div className="likedPost ">
                    <div className="userCircle"></div>
                    <div className= "notificationUsername">
                        "Name": commented on your "post"</div>
                </div>
            </div>
                <div className="notificationBox">
                    <div className="likedPost ">
                        <div className="userCircle"></div>
                        <div className= "notificationUsername">
                            "Name": posted a new "post"</div>
                    </div>
            </div>
            </div>
            </div>

        </MainLayout>
    );
}

export default NotificationPage;