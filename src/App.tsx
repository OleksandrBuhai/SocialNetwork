import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import NavBar from "./components/NavBar/NavBar";
import { ProfieContainer } from "./components/Profile/ProfileContainer";
import { UsersContainer } from "./components/Users/UsercContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


type AppType = {}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <NavBar />
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() => <ProfieContainer />} />
                    <Route path={"/dialogs"} render={() => <DialogsContainer />} />
                    <Route path={"/users"} render={() => <UsersContainer />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
