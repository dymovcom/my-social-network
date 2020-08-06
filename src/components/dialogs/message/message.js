import React from "react";
import s from './message.module.css';

const Message = ({text}) => {
    return (
        <div className={s.message}>
            <div className={s.messageBubble}>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Message;