import { v1 } from "uuid";

export type userType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string,
        country: string
    }
}
export type UsersPageType = {
    users: Array<userType>
}

export type followUsersActionType = {
    type: 'FOLLOW',
    payload: {
        usersId: string
    }
}
export type unfollowUsersActionType = {
    type: 'UNFOLLOW'
    payload: {
        usersId: string
    }
}
export type setUsersActionType = {
    type: 'SET_USERS'
    users: Array<userType>
}
type ActionsType = followUsersActionType | unfollowUsersActionType | setUsersActionType


let initialState: UsersPageType = {
    users: [
        { id: v1(), photoUrl: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', followed: true, fullName: 'Alex', status: 'I am lazy', location: { city: 'Mlada-Boleslav', country: 'Czechia' } },
        { id: v1(), photoUrl: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', followed: true, fullName: 'Alex', status: 'I am lazy', location: { city: 'Mlada-Boleslav', country: 'Czechia' } },
        { id: v1(), photoUrl: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', followed: false, fullName: 'Alex', status: 'I am lazy', location: { city: 'Mlada-Boleslav', country: 'Czechia' } },
        { id: v1(), photoUrl: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', followed: false, fullName: 'Alex', status: 'I am lazy', location: { city: 'Mlada-Boleslav', country: 'Czechia' } },
    ]
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map((el) => {
                    return el.id === action.payload.usersId ? { ...el, followed: true } : el
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(el => {
                    return el.id === action.payload.usersId ? { ...el, followed: false } : el
                })
            }
        case "SET_USERS":
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}
export const followAC = (usersId: string): followUsersActionType => ({
    type: 'FOLLOW',
    payload: { usersId }
})
export const unfollowAC = (usersId: string): unfollowUsersActionType => ({
    type: 'UNFOLLOW',
    payload: { usersId }
})
export const setUsersAC = (users: Array<userType>) => {
    type: 'SET_USERS'
    users: users
}

export default usersReducer