// import { createSelector } from "reselect";

// export const getUsers = (state) => {
//     return state.usersPage.users;
// }

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

// export const getUsersSuper = createSelector(getUsers, (users) => {
//     return users.filter(u => u.id === 18603)
// });
// it works, but i don't need this selector so i won't use this selector

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
