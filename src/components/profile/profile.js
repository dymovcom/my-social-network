import React from "react";
import s from './profile.module.css';
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import Friends from "./friends/friends";

const Profile = ({data: {posts, friends}, addPost}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <div className={s.wrapper}>
                <Friends friends={friends}/>
                <MyPosts posts={posts} addPost={addPost}/>
            </div>
        </div>
    )
}

export default Profile;