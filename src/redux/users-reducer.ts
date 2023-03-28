
export type userType = {
    id: string
    name: string
    photos:{
        small:string
        large:string
    }
    status: null
    followed:boolean
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
    users: []
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((el) => {
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
export const setUsersAC = (users: Array<userType>): setUsersActionType => ({
    type: 'SET_USERS',
    users: users
})

export default usersReducer