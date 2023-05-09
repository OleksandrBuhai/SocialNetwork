
export type userType = {
    id: string
    name: string
    photos: {
        small: string
        large: string
    }
    status: null
    followed: boolean
}

export type followingInProgressType = {
    isFetching:boolean,
    userId:string
} 

export type UsersPageType = {
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<followingInProgressType>
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

export type setCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    payload: {
        currentPage: number
    }
}
export type setTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT"
    payload: {
        totalUsersCount: number
    }
}
export type tooglePreloaderActionType = {
    type: "TOOGLE_PRELOADER"
    payload: {
        isFetching: boolean
    }
}

export type TOGGLE_IS_FOLLOWING_PROGRESS_ACTION_TYPE = {
    
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    payload: {
        userId: followingInProgressType
        isFetching: boolean
    }
}


type ActionsType = followUsersActionType | unfollowUsersActionType | setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType | tooglePreloaderActionType | TOGGLE_IS_FOLLOWING_PROGRESS_ACTION_TYPE


let initialState: UsersPageType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return { ...state, users: action.users }
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.payload.currentPage }
        case "SET_TOTAL_USERS_COUNT":
            return { ...state, totalUsersCount: action.payload.totalUsersCount }
        case "TOOGLE_PRELOADER":
            return { ...state, isFetching: !action.payload.isFetching }
            case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
                return {
                    ...state,
                    followingInProgress: action.payload.isFetching
                        ? [...state.followingInProgress, action.payload.userId]
                        : state.followingInProgress.filter(id => id != action.payload.userId)
                }
            }
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
export const setCurentPageAC = (currentPage: number): setCurrentPageActionType => ({
    type: "SET_CURRENT_PAGE",
    payload: { currentPage }
})
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountActionType => ({
    type: "SET_TOTAL_USERS_COUNT",
    payload: { totalUsersCount }
})
export const tooglePreloaderAC = (isFetching: boolean): tooglePreloaderActionType => ({
    type: 'TOOGLE_PRELOADER',
    payload: { isFetching }
})
export const toggleFollowingProgressAC = (isFetching:boolean, userId:followingInProgressType):TOGGLE_IS_FOLLOWING_PROGRESS_ACTION_TYPE => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS', payload:{isFetching, userId }})


export default usersReducer