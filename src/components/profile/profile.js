import React from "react";
import s from './profile.module.css';
import MyPosts from "./myPosts/myPosts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <img src="https://emgonline.com/wp-content/uploads/2017/03/03-27-SocialMediaGenZ.jpg" alt="profile img"/>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;