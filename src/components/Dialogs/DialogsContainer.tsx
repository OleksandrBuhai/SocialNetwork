import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {storeType} from "../../redux/redux-state";

type DialogsPropsType = {
    store: storeType
}



const DialogsContainer = (props:DialogsPropsType) => {

    const dialogsStore = props.store.getState().dialogsPage

    const addMessage = () => {
        console.log('asdasd')
        props.store.dispatch(addMessageActionCreator())
    }
    const onMessageChange = (text:string) => {
            let newText = updateNewMessageTextActionCreator(text)
            props.store.dispatch(newText)
    }
    return (
        <div>
            <Dialogs state={dialogsStore} addMessage={addMessage} onMessageChange={onMessageChange} newMessageText={dialogsStore.newMessageBody}/>
        </div>
    );
};

export default DialogsContainer;