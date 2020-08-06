import React from "react";
import {NavLink} from "react-router-dom";
import s from "./dialogItem.module.css";

const DialogItem = ({id, name}) => {
    return (
        <NavLink to={`/dialogs/${id}`} activeClassName={s.active} className={s.item}>{name}</NavLink>
    )
}

export default DialogItem;