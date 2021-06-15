import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?currentPage=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};