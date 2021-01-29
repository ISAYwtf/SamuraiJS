import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "eea6845f-31df-455c-b1eb-312ac9f3c7b1"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followTo(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    unFollowTo(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    }
}
