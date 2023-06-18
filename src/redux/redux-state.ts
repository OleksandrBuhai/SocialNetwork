import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store
export type dispatchType = typeof store.dispatch

export default store