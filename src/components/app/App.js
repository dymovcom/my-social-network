import React from 'react';
import s from './app.module.css';
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Profile from "../profile/profile";


const App = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <main className={s.content}>
                <Sidebar/>
                <div className={s.main}>
                    <Profile/>
                </div>
            </main>
        </div>
    )
}

export default App;