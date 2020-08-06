import React from "react";
import s from './post.module.css';
import iconLike from './like.svg';

const Post = ({message, like}) => {
    return (
        <div className={s.post}>
            <div className={s.header}>
                <img src="https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg" alt="ava"/>
                <span>Антон Дымов</span>
            </div>
            <div className={s.body}>
                {message}
            </div>
            <div className={s.like}>
                <img src={iconLike} alt="like"/>
                <span>{like}</span>
            </div>
        </div>
    )
}

export default Post;