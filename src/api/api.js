import * as axios from "axios";

const server = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "eea6845f-31df-455c-b1eb-312ac9f3c7b1"
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
    }
}

export const authAPI = {
    getMe() {
        return server.get(`auth/me/`, {
            withCredentials: true
        }).then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return server.post(`auth/login/`,
            {email, password, rememberMe},
            {
                withCredentials: true
            }).then(response => response.data);
    },
    logout() {
        return server.delete(`auth/login/`).then(response => response.data);
    }
}
