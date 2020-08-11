import React from "react";
import s from './newPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

const NewPost = (props) => {
    const newPostElement = React.createRef();

    const onAddPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onChangePost = () => {
        const text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.newPost}>
            <textarea
                className={s.input}
                ref={newPostElement}
                placeholder='Что у вас нового?'
                value={props.newPostText}
                onChange={onChangePost}/>
            <button className={s.button} onClick={onAddPost}>Опубликовать</button>
        </div>
    )
}

export default NewPost;