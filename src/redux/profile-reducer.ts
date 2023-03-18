import {ActionsType, AddPostActionType, UpdateNewPostTextActionType} from "./state";


export type PostType = {
    id: number,
    message: string,
    likecount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState = {
    posts: [
        {id: 1, message: "hello", likecount: 5},
        {id: 2, message: "hello", likecount: 5},
        {id: 3, message: "hello", likecount: 5}
    ],
    newPostText: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType):ProfilePageType => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: 4,
            message: state.newPostText,
            likecount: 0
        }
        state.posts.push(newPost)
        state.newPostText = " "
        return state
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText
        return state
    }
    return state
}
export const addPostActionCreator = (): AddPostActionType => ({
    type: 'ADD-POST'
})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer