import { connect } from 'react-redux';
import {compose, Dispatch} from 'redux';
import { addMessageActionCreator, DialogsPageType, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { AppStateType } from "../../redux/redux-state";
import { Dialogs } from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import React from "react";

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


type mapStateToProps = {
    dialogsPage: DialogsPageType
    isAuth:boolean
}

type mapDispatchToProps = {
    addMessage: () =>void,
    onMessageChange: (e:string) =>void,
}


let mapStateToProps = (state: AppStateType):mapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}


let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
    return {
        addMessage: () =>{
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (e:string) => { 
            dispatch(updateNewMessageTextActionCreator(e))
        },
        
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


