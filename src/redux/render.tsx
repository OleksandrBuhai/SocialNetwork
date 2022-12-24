import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import {addPost, RootStateType, updateNewPostText} from "./state";
import React from "react";



export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
