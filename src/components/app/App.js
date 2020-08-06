import React from 'react';
import s from './app.module.css';
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Profile from "../profile/profile";
import Dialogs from "../dialogs/dialogs";
import News from "../news/news";
import Music from "../music/music";
import {BrowserRouter, Route} from "react-router-dom";



const App = ({state: {dialogsPage, profilePage}, addPost}) => {
    return (
        <BrowserRouter>
            <Header/>
            <div className={s.wrapper}>
                <main className={s.content}>
                    <Sidebar/>
                    <div className={s.main}>
                        <Route
                            path='/profile'
                            render={() => <Profile data={profilePage} addPost={addPost}/>}
                        />
                        <Route
                            path='/dialogs'
                            render={() => <Dialogs data={dialogsPage}/>}
                        />
                        <Route
                            path='/news'
                            render={() => <News/>}
                        />
                        <Route
                            path='/music'
                            render={() => <Music/>}
                        />
                    </div>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App;