export type profileType = {
    posts: postsType[]
    newPostText: string
}
export type postsType = {
    id: number
    message: string,
    likescount: number
}
export type DialogsType = {
    newMessageText:string
    dialogsData: Array<dialogType>
    messagesData: Array<messagesData>
}
export type dialogType = {
    id: number,
    name: string
    avatar: string
}
export type messagesData = {
    id: number
    message: string
}

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

export type sideBarType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: profileType
    dialogPage: DialogsType
    sideBar: sideBarType
}


type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'SEND-MESSAGE'
}
type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage:string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageActionType

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (e: RootStateType) => void
    addPost: () => void
    updateNewPostText: (text: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch:(action:any)=>void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hello", likescount: 5},
                {id: 2, message: "hello", likescount: 5},
                {id: 3, message: "hello", likescount: 5}
            ],
            newPostText: "hhhh"
        },
        dialogPage: {
            newMessageText: " ",
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
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    name: 'Marina',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFD7rVDIsj77R6CBhfwmiidoHUQY76Ze4ShORloVE-_ECfbYnDCVri9odpInT7eHXyHw&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTze-2AbWgVO2gec7MY8iqNNg8wq-EQHAfX_X8gb7TR-znW5qTS0cWvHQl8BpRH3Up0Sic&usqp=CAU'
                },
                {
                    id: 3,
                    name: 'Honzo',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU'
                }
            ]
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber(e: RootStateType) {

    },

    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            /*message: this._state.profilePage.newPostText,*/
            likescount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },

    updateNewPostText(text: string) {
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
    },
    dispatch(action:ActionsType){
        if (action.type==="ADD-POST"){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                /*message: this._state.profilePage.newPostText,*/
                likescount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        }else if (action.type=== "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }else if (action.type==="SEND-MESSAGE"){
            let newMessage = {
                id: 4,
                message: this._state.dialogPage.newMessageText,
                /*message: this._state.profilePage.newPostText,*/

            }
            this._state.dialogPage.messagesData.push(newMessage)
            this._state.dialogPage.newMessageText = ""
            this._callSubscriber(this._state)
        }else if (action.type=== "UPDATE-NEW-MESSAGE-TEXT"){
            this._state.dialogPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    },

    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    }
}

export const addPostActionCreator = ():AddPostActionType => ({
 type: 'ADD-POST'
})
export const updateNewPostTextActionCreator = (text:string) :UpdateNewPostTextActionType =>
    ({type:'UPDATE-NEW-POST-TEXT', newText: text })
export const addMessageActionCreator = ():AddMessageActionType => ({
    type: 'SEND-MESSAGE'
})
export const updateNewMessageTextActionCreator = (text:string) :UpdateNewMessageActionType =>
    ({type:'UPDATE-NEW-MESSAGE-TEXT', newMessage: text })



export default store

