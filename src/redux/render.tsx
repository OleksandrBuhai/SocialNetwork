import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import {addPost, RootStateType} from "./state";
import React from "react";



export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
