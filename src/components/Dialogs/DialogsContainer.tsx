import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addMessageActionCreator, DialogsPageType, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import { AppStateType } from "../../redux/redux-state";
import { Dialogs } from "./Dialogs";

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
}

type mapDispatchToProps = {
    addMessage: () =>void,
    onMessageChange: (e:string) =>void,
}


let mapStateToProps = (state: AppStateType):mapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;