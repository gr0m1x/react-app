import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY" : "428cc35c-aca7-4b7c-afea-20045660fb17"
    }
}) ;

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
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
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => { return response.data })
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status : status})
    },

    savePhoto(photoFile) {
        const formData = new FormData(); // формируем обьект  что бы отправить фото на сервак
        formData.append("image", photoFile); // в обьект передаем требуемый параметр и файл для заггрузки
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // 2м параметром передаем объект formData, 3-м настраиваем заголовки 'Content-Type': 'multipart/form-data'
            }
        })
    }
};

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => { return response.data })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => { return response.data })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => { return response.data })
    }
};




