import React from "react";
import s from './dialogs.module.css';
import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/message";
import NewMessage from "./message/newMessage/newMessage";

// const Dialogs = ({data: {dialogs, messages}}) => {
const Dialogs = (props) => {

    const dialogsElements = props.data.dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name}/>
        );

    const messagesElements = props.data.messages.map(message =>
        <Message author={message.author} text={message.text}/>
        );
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <NewMessage dispatch={props.dispatch} newMessageText={props.newMessageText}/>
            </div>
        </div>
    )
}

export default Dialogs;