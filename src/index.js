import ReactDOM from "react-dom";
import React from "react";
import App from "./components/app/App";
import store from "./redux/state";

const rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireThree(store.getState());

store.subscribe(rerenderEntireThree);