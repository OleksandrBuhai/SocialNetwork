import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import store from "./redux/redux-state";
import { RootStateType } from "./redux/state";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
