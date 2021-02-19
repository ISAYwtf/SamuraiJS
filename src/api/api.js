import * as axios from "axios";

const server = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "eed101de-783b-4107-bd06-6b28cf0259ec"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return server.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followTo(id) {
        return server.post(`follow/${id}`)
            .then(response => response.data);
    },
    unFollowTo(id) {
        return server.delete(`follow/${id}`)
            .then(response => response.data);
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return server.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId) {
        return server.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status) {
        return server.put(`profile/status`, {status}).then(response => response.data);
    },
    updateProfile(profile) {
        return server.put(`profile`, profile).then(response => response.data);
    },
    savePhoto(file) {
        const formData = new FormData();
        const headers = {
            'Content-Type': 'multipart/form-data'
        };

        formData.append("image", file);
        return server.put(`profile/photo`, formData, {headers})
            .then(response => response.data);
    }
}

export const authAPI = {
    getMe() {
        return server.get(`auth/me/`, {
            withCredentials: true
        }).then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha) {
        return server.post(`auth/login/`,
            {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return server.delete(`auth/login/`)
            .then(response => response.data);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return server.get(`security/get-captcha-url`).then(response => response.data);
    },
}
