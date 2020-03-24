import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY" : "5351a01e-a2b9-49ab-accf-57bf7595a3cd"
    }
}) ;

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => { return response.data })
}

export const followUsers = (userId) => {
    return instance.post(`follow/${userId}`)
        .then(response => { return response.data })
}

export const unfollowUsers = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => { return response.data })
}
