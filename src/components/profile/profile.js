import React from "react";
import s from './profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import Friends from "./friends/friends";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <div className={s.wrapper}>
                <Friends friends={props.data.friends}/>
                <MyPosts posts={props.data.posts} newPostText={props.data.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            </div>
        </div>
    )
}

export default Profile;