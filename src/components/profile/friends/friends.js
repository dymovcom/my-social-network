import React from "react";
import s from './friends.module.css';
import FriendsItem from "./friendsItem/friendsItem";

const Friends = ({friends}) => {
    const friendsElements = friends.map(({url, src, name}) =>
        <FriendsItem
            url='#s'
            src='https://i09.fotocdn.net/s104/53e353be917dd79f/user_xl/2209123980.jpg'
            name='Иван'
        />
    );

    return (
        <div className={s.friends}>
            <span className={s.header}>Друзья</span>
                <div className={s.row}>
                    {friendsElements}
                </div>
        </div>
    )
}

export default Friends;