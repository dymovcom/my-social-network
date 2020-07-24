import React from "react";
import s from './profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <img src="https://emgonline.com/wp-content/uploads/2017/03/03-27-SocialMediaGenZ.jpg" alt="profile img"/>
            <div>ava+description</div>
            <div>My posts</div>
            <div>New post</div>
            <div>post 1</div>
            <div>post 2</div>
        </div>
    )
}

export default Profile;