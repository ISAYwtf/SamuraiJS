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
    }
}

export const auth = {
    getMe() {
        return server.get(`auth/me/`, {
            withCredentials: true
        }).then(response => response.data);
    }
}
