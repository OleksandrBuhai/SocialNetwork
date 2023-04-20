


export type PostType = {
    id: number,
    message: string,
    likecount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: number
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type setProfilePage = {
    type: 'SET-PROFILE-PAGE'
    profile: number
}

type setProfilePageAT = { type: 'SET-PROFILE-PAGE', profile: number }

type ActionsType = AddPostActionType | UpdateNewPostTextActionType | setProfilePageAT

let initialState = {
    posts: [
        { id: 1, message: "hello", likecount: 5 },
        { id: 2, message: "hello", likecount: 5 },
        { id: 3, message: "hello", likecount: 5 }
    ],
    newPostText: "",
    profile: 2
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: 4,
            message: state.newPostText,
            likecount: 0
        }
        return { ...state, posts: [...state.posts, newPost], newPostText: "" }
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText
        return { ...state, newPostText: action.newText }
    } else if (action.type === "SET-PROFILE-PAGE"){
        return {...state, profile: action.profile}
    }
    return state
}
export const addPostActionCreator = (): AddPostActionType => ({
    type: 'ADD-POST'
})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

export const setProfileAC = (profile:number):setProfilePageAT => 
    ({type: "SET-PROFILE-PAGE",profile:profile})

export default profileReducer