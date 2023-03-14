import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import { storeType } from "../../redux/redux-state";
import { StoreType } from '../../redux/state';

import { Dialogs } from "./Dialogs";

type DialogsPropsType = {
    store: storeType
}
type DialogsType = {}

/* const DialogsContainer: React.FC<DialogsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
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
                            newMessageText={dialogsStore.newMessageBody} />
                    </div>
                );
            }}

        </StoreContext.Consumer>
    )
}; */

let mapStateToProps = (store:StoreType)=> { 
    return {
    dialogsPage:store._state.dialogsPage
    }
}



let mapDispatchToProps =()=>{
        return {
            addMessage:()=>{},
            onMessageChange:()=>{},
            newMessageText:()=>{},
        }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;