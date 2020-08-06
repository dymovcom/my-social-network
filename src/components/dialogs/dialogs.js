import React from "react";
import s from './dialogs.module.css';
import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/message";

const Dialogs = ({data: {dialogs, messages}}) => {

    const dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    const messagesElements = messages.map(message => <Message text={message.text}/>);

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;