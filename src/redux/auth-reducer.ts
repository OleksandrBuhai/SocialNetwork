type authMePropsType = {
    data: {
        id: string | null
        email: string | null
        login: string | null
    }
    isAuth: boolean
}

let initialState = {
    data: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
}

type authMeAT = {
    type: "AUTH-ME"
    data: {
        id: string | null
        email: string | null
        login: string | null
    }
}

const authReducer = (state: authMePropsType = initialState, action: authMeAT) => {
    switch (action.type) {
        case "AUTH-ME":
            return {
                ...state,
                ...action.data,
                aisAuth: true
            }
    }
}
export const autnMeAC = (id: any, email: any, login: any): authMeAT => ({
    type: "AUTH-ME",
    data: {
        id, email, login
    }
})


export default authReducer