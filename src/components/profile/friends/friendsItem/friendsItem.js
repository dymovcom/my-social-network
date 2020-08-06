import React from "react";
import s from './friendsItem.module.css'

const FriendsItem = ({url, src, name}) => {
    return (
        <a href={url} className={s.cell}>
            <img src={src} alt={name}/>
            <span>{name}</span>
        </a>
    )
}

export default FriendsItem;