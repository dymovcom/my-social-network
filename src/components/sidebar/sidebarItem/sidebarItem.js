import React from "react";
import s from "./sidebarItem.module.css"
import {NavLink} from "react-router-dom";

const SidebarItem = ({path, icon, text}) => {
    return (
        <li className={s.item}>
            <NavLink
                className={s.link}
                to={path}
            >
                <img className={s.linkIcon} src={icon} alt="icon"/>
                <span>{text}</span>
            </NavLink>
        </li>
    )
}

export default SidebarItem;