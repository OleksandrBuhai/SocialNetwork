import React from 'react';
import './index.css';
import {RootStateType} from "./redux/state";
import store from "./redux/redux-state"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
             dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})
