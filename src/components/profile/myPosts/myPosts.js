import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";
import NewPost from "./newPost/newPost";

const MyPosts = (props) => {
    const postsElements = props.posts.map(post => <Post message={post.message} like={post.likeCount} />);
    return (
        <div className={s.posts}>
            <NewPost dispatch={props.dispatch} newPostText={props.newPostText}/>
            {postsElements}
        </div>
    )
}

export default MyPosts;