import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { UsersContainer } from "./components/Users/UsercContainer";
import { storeType } from "./redux/redux-state";
import { ProfieContainer } from "./components/Profile/ProfileContainer";



type AppType = {}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header />
                <NavBar />
                <div className={"app-wrapper-content"}>
                    <Route path={"/profile"} render={() => <ProfieContainer/>} />
                    <Route path={"/dialogs"} render={() => <DialogsContainer />} />
                    <Route path={"/users"} render={() => <UsersContainer />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
