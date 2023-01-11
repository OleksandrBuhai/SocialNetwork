import {ActionsType, AddMessageActionType, DialogsType, UpdateNewMessageActionType} from "./state";

const dialogsReducer = (state:DialogsType,action:ActionsType) => {
    if (action.type==="SEND-MESSAGE"){
        let newMessage = {
            id: 4,
            message: state.newMessageText
            /*message: this._state.profilePage.newPostText,*/

        }
        state.messagesData.push(newMessage)
        state.newMessageText = ""
        return state
    }else if (action.type=== "UPDATE-NEW-MESSAGE-TEXT"){
        state.newMessageText = action.newMessage
        return state
    }
    return state
}
export const addMessageActionCreator = (): AddMessageActionType => ({
    type: 'SEND-MESSAGE'
})
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageActionType =>
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text})

export default dialogsReducer