import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'cfae1dd2-e452-4dc0-8a30-c390f0b66ed6'
    }
});

export const usersPageAPI = {
    // Users Container
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    pageChanged: (pages, pageSize) => {
        return instance.get(`users?page=${pages}&count=${pageSize}`).then(response => response.data)
    },
    // Users List
    follow: (usersId) => instance.post(`follow/${usersId}`)
        .then(response => response.data),
    unFollow: (usersId) => instance.delete(`follow/${usersId}`)
        .then(response => response.data)
}


export const profilePageAPI = {
    setUsers: (userId) => instance.get(`profile/${userId}`)
        .then(response => response.data)

}

export const headerPageAPI = {
    headerContainer: () => instance.get(`auth/me`)
        .then(response => response.data)

}