import React from 'react';
import s from './sidebar.module.css';
import SidebarItem from "./sidebarItem/sidebarItem";
import iconHome from './home.svg';
import iconNews from './news.svg';
import iconMessages from './messages.svg';
import iconMusic from './music.svg';

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <ul className={s.list}>
                <SidebarItem
                    path='/profile'
                    icon={iconHome}
                    text='Моя страница'
                />
                <SidebarItem
                    path='/news'
                    icon={iconNews}
                    text='Новости'
                />
                <SidebarItem
                    path='/dialogs'
                    icon={iconMessages}
                    text='Сообщения'
                />

                <SidebarItem
                    path='/music'
                    icon={iconMusic}
                    text='Музыка'
                />
            </ul>
        </nav>
    )
}

export default Sidebar;