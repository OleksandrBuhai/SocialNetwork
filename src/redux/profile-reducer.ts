import {ActionsType, AddPostActionType, profileType, UpdateNewPostTextActionType} from "./state";


let initialState = {
        posts: [
            {id: 1, message: "hello", likescount: 5},
            {id: 2, message: "hello", likescount: 5},
            {id: 3, message: "hello", likescount: 5}
        ],
        newPostText: "hhhh"
}

  const profileReducer = (state:profileType= initialState, action:ActionsType) => {
    if (action.type==="ADD-POST"){
        let newPost = {
            id: 4,
            message: state.newPostText,
            /*message: this._state.profilePage.newPostText,*/
            likescount: 0
        }
      state.posts.push(newPost)
        state.newPostText = ""
      return state
    }else if (action.type=== "UPDATE-NEW-POST-TEXT"){
       state.newPostText = action.newText
        return state
    }
    return state
}
export const addPostActionCreator = ():AddPostActionType => ({
    type: 'ADD-POST'
})
export const updateNewPostTextActionCreator = (text:string) :UpdateNewPostTextActionType =>
    ({type:'UPDATE-NEW-POST-TEXT', newText: text })

export default profileReducer