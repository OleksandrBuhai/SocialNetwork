import {profileApi, usersAPI} from "../api/api";
import {dispatchType} from "./redux-state";

export type PostType = {
    id: number,
    message: string,
    likecount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: profileAPItype | null
    status:string
}

export type profileAPItype = {

    aboutMe: string | null,
    contacts: {
        facebook: string | null
        github: string | null
        instagram: string | null
        mainLink: string | null
        twitter: string | null
        vk: string | null
        website: string | null
        youtube: string | null
    },
    fullName: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    photos: {
        large: string | undefined,
        small: string | undefined
    },
    userId: number
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type setProfilePageAT = {
    type: 'SET-PROFILE-PAGE'
    profile: profileAPItype
}

export type getStatusAT = {
    type: 'GET-STATUS'
    status:string
}

type ActionsType = AddPostActionType | UpdateNewPostTextActionType | setProfilePageAT |getStatusAT

let initialState = {
    posts: [
        {id: 1, message: "hello", likecount: 5},
        {id: 2, message: "hello", likecount: 5},
        {id: 3, message: "hello", likecount: 5}
    ],
    newPostText: "",
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: 4,
            message: state.newPostText,
            likecount: 0
        }
        return {...state, posts: [...state.posts, newPost], newPostText: ""}
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText
        return {...state, newPostText: action.newText}
    } else if (action.type === "SET-PROFILE-PAGE") {
        return {...state, profile: action.profile}
    } else if (action.type === 'GET-STATUS'){
        console.log('sss')
        return {...state, status: action.status}
    }
    return state
}


export const getProfileThunk = (userId: string) => (dispatch: dispatchType) => {
    usersAPI.getProfile(userId).then(response => {
        console.log('profikle')
            dispatch(setProfileAC(response.data))
        }
    )
}

export const getStatusThunk = (userId:string)=>(dispatch:dispatchType)=>{
        profileApi.getStatus(userId).then(res=>{
            console.log('status')
            dispatch(getStatusAC(res.data))
        })
}

export const updateStatusThunk = (status:string) => (dispatch:dispatchType) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getStatusAC(status));
            }
        });
}


export const getStatusAC = (status:string):getStatusAT => ({
    type:"GET-STATUS", status
})

export const addPostActionCreator = (): AddPostActionType => ({
    type: 'ADD-POST'
})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export const setProfileAC = (profile: profileAPItype): setProfilePageAT =>
    ({type: "SET-PROFILE-PAGE", profile})

export default profileReducer