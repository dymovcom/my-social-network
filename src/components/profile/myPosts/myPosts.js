import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";
import NewPost from "./newPost/newPost";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <NewPost/>
            <Post
                message='Привет! Как у тебя дела??'
                like={4}
            />
            <Post
                message='Привет! Все хорошо!'
                like={2}
            />
            <Post
                message='Учу реакт!'
                like={22}
            />
        </div>
    )
}

export default MyPosts;