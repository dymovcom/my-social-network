import React from "react";
import s from './post.module.css';

const Post = ({message, like}) => {
    return (
        <div className={s.post}>
            <div className={s.user}>
                <img src="https://yt3.ggpht.com/a/AATXAJwu2vMKLZug4ffi4l4w6u6J9oWjqsfkVkf9jQ=s900-c-k-c0xffffffff-no-rj-mo" alt="avatar"/>
                <span className={s.text}>{message}</span>
            </div>
            <span className={s.like}>
                <i className='far fa-heart'></i>
                {like}
            </span>
        </div>
    )
}

export default Post;