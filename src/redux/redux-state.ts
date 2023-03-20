import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage:usersReducer,
    sidebar: sidebarReducer
})

let store = createStore(rootReducers)
export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store

export default store