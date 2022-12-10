import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() => <Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogs={props.state.dialogPage.dialogsData}
                                                                    messages={props.state.dialogPage.messagesData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
