import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '918a0841-576f-424d-8ff5-939f6e69dc6e'
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
    follow: (usersId) => instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${usersId}`)
        .then(response => response.data),
    unFollow: (usersId) => instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${usersId}`)
        .then(response => response.data)
}


export const profilePageAPI = {
    setUsers: (userId) => instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => response.data)

}

export const headerPageAPI = {
    headerContainer: () => instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
        .then(response => response.data)

}