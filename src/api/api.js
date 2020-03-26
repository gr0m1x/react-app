import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY" : "425b72dc-8e33-4dfa-bb1a-ffc2a8028aae"
    }
}) ;

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data })
    },
    followUsers(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => { return response.data })
    },
    unfollowUsers(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => { return response.data })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => { return response.data })
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => { return response.data })
    }
};




