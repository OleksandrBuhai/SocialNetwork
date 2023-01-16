import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {storeType} from "../../redux/redux-state";
import StoreContext from '../../StoreContext';

type DialogsPropsType = {
    store: storeType
}
type DialogsType = {}

const DialogsContainer = (props: DialogsType) => {

    return  (
        <StoreContext.Consumer>
            {(store)=>{
                const dialogsStore = store.getState().dialogsPage

                const addMessage = () => {
                    console.log('asdasd')
                    store.dispatch(addMessageActionCreator())
                }
                const onMessageChange = (text: string) => {
                    let newText = updateNewMessageTextActionCreator(text)
                    store.dispatch(newText)
                }
                return (
                    <div>
                        <Dialogs state={dialogsStore} addMessage={addMessage} onMessageChange={onMessageChange}
                                 newMessageText={dialogsStore.newMessageBody}/>
                    </div>
                );
            }}

        </StoreContext.Consumer>
    )


};

export default DialogsContainer;