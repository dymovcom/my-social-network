import React from 'react';
// import './App.css';
import './app.sass';


const App = () => {
    return (
        <div className='container'>
            <header className='header'>
                <div className='header__wrapper'>
                    <img className='logo header__logo' src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/f7/d0/6a/f7d06a9a-d12e-9286-eeea-35da144bcee0/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/320x0w.jpg" alt="logo"/>
                    <div className='header__login'>login</div>
                </div>
            </header>
            <main className='content'>
                <div className='content__wrapper'>
                    <nav className='sidebar content__sidebar'>
                        <ul className='sidebar__list'>
                            <li className='sidebar__item'><a className='sidebar__link' href="#s">Friends</a></li>
                            <li className='sidebar__item'><a className='sidebar__link' href="#s">Messages</a></li>
                            <li className='sidebar__item'><a className='sidebar__link' href="#s">Photos</a></li>
                        </ul>
                    </nav>
                    <div className='main content__main'>
                        <img className='content__img' src="https://emgonline.com/wp-content/uploads/2017/03/03-27-SocialMediaGenZ.jpg" alt="profile img"/>
                        <div>ava+description</div>
                        <div>My posts</div>
                        <div>New post</div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;