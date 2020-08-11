import React from "react";
import {NavLink} from "react-router-dom";
import s from "./dialogItem.module.css";

const DialogItem = ({id, name}) => {
    return (
        <NavLink to={`/dialogs/${id}`} activeClassName={s.active} className={s.item}>
            <img src="https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg" alt="ava"/>
            {name}
        </NavLink>
    )
}

export default DialogItem;