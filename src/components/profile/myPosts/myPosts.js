import React from "react";
import s from './myPosts.module.css';
import Post from "./post/post";
import NewPost from "./newPost/newPost";

const MyPosts = ({posts, addPost}) => {
    const postsElements = posts.map(post => <Post message={post.message} like={post.likeCount} />);
    return (
        <div className={s.posts}>
            <NewPost addPost={addPost}/>
            {postsElements}
        </div>
    )
}

export default MyPosts;