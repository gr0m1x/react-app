import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY" : "428cc35c-aca7-4b7c-afea-20045660fb17"
    }
}) ;

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data })
    },
    followUsers: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => { return response.data })
    },

    unfollowUsers: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => { return response.data })
    }
}




