import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/App";
import {addPost} from "./redux/state";

export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}