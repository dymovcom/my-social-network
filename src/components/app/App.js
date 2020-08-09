import React from 'react';
import s from './app.module.css';
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Profile from "../profile/profile";
import Dialogs from "../dialogs/dialogs";
import News from "../news/news";
import Music from "../music/music";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <Header/>
            <div className={s.wrapper}>
                <main className={s.content}>
                    <Sidebar/>
                    <div className={s.main}>
                        <Route
                            path='/profile'
                            render={() => <Profile data={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}
                        />
                        <Route
                            path='/dialogs'
                            render={() => <Dialogs data={props.state.dialogsPage}/>}
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