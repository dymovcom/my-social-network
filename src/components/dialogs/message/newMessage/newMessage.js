import React from "react";
import s from './newMessage.module.css';
import sendImg from "../../sendMessage.svg";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/state";

const NewMessage = (props) => {
    const newMessageElement = React.createRef();

    const onAddMessage = () => {
        props.dispatch(addMessageActionCreator('Антон'));
    }
    const onChangeMessage = () => {
        const text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator('Антон', text));
    }
    return (
        <div className={s.newMessage}>
            <textarea
                className={s.input}
                ref={newMessageElement}
                placeholder='Напишите сообщение...'
                value={props.newMessageText}
                onChange={onChangeMessage}
            />
            <button onClick={onAddMessage}><img src={sendImg} alt="send"/></button>
        </div>
    )
}

export default NewMessage;