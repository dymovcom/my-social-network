import React from "react";
import s from './newPost.module.css';

const NewPost = () => {
    return (
        <div className={s.newPost}>
            <input className={s.input} type="text" placeholder='Новый пост'/>
            <button className={s.button}>Отправить</button>
        </div>
    )
}

export default NewPost;