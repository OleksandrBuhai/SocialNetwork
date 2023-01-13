import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsType, RootStateType} from "./redux/state";
import {storeType} from "./redux/redux-state";

type AppPropsType = {
    state: RootStateType
    dispatch:(e:ActionsType)=>void
    store:storeType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar state={props.state.sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() => <Profile state={props.store}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
