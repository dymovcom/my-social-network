import React from 'react';
import s from './sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul className={s.list}>
                <li className={s.item}><a className={s.link} href="#s">Friends</a></li>
                <li className={s.item}><a className={s.link} href="#s">Messages</a></li>
                <li className={s.item}><a className={s.link} href="#s">Photos</a></li>
            </ul>
        </nav>
    )
}

export default Sidebar;