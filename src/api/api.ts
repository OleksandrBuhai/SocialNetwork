import * as axios from "axios";

const instanse = axios.default.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ac60c106-0830-42a0-92c3-38d641ee1afd"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            }
        )
    },
    unFollow(userId: number) {
        return instanse.delete(`/follow/${userId}`)
    },
    follow(userId: number) {
        return instanse.post(`/follow/${userId}`)
    },
    getProfile(userId: string) {
        return profileApi.getProfile(userId)
    },
    authMe (){
        return  instanse.get(`auth/me`, { withCredentials: true })
    }
}

export const profileApi = {
        getProfile(userId: string){
            return instanse.get(`profile/` + userId)
        },
        getStatus(userId:string) {
            return instanse.get(`profile/status/` + userId)
        },
       updateStatus(status:string) {
            return instanse.put(`profile/status`,{status:status})
    }

}