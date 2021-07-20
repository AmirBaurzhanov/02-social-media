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

export const ProfileAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getStatus: (userId) => {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const AuthAPI = {
    login: (email, password, rememberMe) => {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe})
    }
}