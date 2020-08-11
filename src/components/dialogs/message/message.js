import React from "react";
import s from './message.module.css';

const Message = ({author, text, dispatch}) => {
    return (
        <>
            <div className={s.messageWrapper}>
                <img src="https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg" alt="ava"/>
                <div className={s.message}>
                    <span className={s.author}>{author}</span>
                    <span className={s.text}>{text}</span>
                </div>
            </div>
        </>
    )
}

export default Message;