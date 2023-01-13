import {ActionsType, AddMessageActionType, DialogsPageType, UpdateNewMessageActionType} from "./state";

let initialState = {
    newMessageBody: " ",
    dialogsData: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'
        },
        {
            id: 2,
            name: 'Andrew',
            avatar: 'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'
        },
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'
        },
        {
            id: 4,
            name: 'Sasha',
            avatar: 'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'
        },
        {
            id: 5,
            name: 'Viktor',
            avatar: 'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'
        },
        {
            id: 6,
            name: 'Valera',
            avatar: 'https://www.meme-arsenal.com/memes/a025985c751e178c66ef5594644684fa.jpg'
        }
    ]
    ,
    messagesData: [
        {id: 1, message: 'Hiiiiiiiiiiiiiiiiiiiiiisdfdsfdsfasdf     iiiiiiiiiii'},
        {id: 2, message: 'hello how it your it-kamasutra?'},
        {id: 3, message: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
        {id: 4, message: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
        {id: 5, message: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
        {id: 6, message: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'}
    ]
}

const dialogsReducer = (state:DialogsPageType = initialState,action:ActionsType) => {
    if (action.type==="SEND-MESSAGE"){
        let newMessage = {
            id: 4,
            message: state.newMessageBody
            /*message: this._state.profilePage.newPostText,*/

        }
        state.messagesData.push(newMessage)
        state.newMessageBody = ""
        return state
    }else if (action.type=== "UPDATE-NEW-MESSAGE-TEXT"){
        state.newMessageBody = action.newMessage
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