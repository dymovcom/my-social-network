import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/f7/d0/6a/f7d06a9a-d12e-9286-eeea-35da144bcee0/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/320x0w.jpg" alt="logo"/>
            <div className={s.login}>login</div>
        </header>
    )
}

export default Header;