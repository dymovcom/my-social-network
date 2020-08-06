import React from "react";
import s from './newPost.module.css';

const NewPost = (props) => {
    const newPostElement = React.createRef();

    const onAddPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = 'Что у вас нового?';
    }

    return (
        <div className={s.newPost}>
            <textarea className={s.input} ref={newPostElement} placeholder='Что у вас нового?'/>
            <button className={s.button} onClick={onAddPost}>Опубликовать</button>
        </div>
    )
}

export default NewPost;