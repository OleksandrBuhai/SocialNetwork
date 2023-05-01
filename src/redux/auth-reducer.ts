export type authMePropsType = {
    id: number
    email: string,
    login: string,
    isAuth: boolean
}

let initialState = {
    id: 1,
    email: '',
    login: '',
    isAuth: false
}

type authMeAT = {
    type: "AUTH-ME"
    data: {
        id: number
        email: string
        login: string
    }
}

const authReducer = (state: authMePropsType = initialState, action: authMeAT) => {
    switch (action.type) {
        case "AUTH-ME":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const autnMeAC = (id: number, email: string, login: string): authMeAT => ({
    type: "AUTH-ME",
    data: {
        id, email, login
    }
})


export default authReducer