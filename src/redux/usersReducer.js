import { ProfileAPI, usersPageAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, followed: true }
                    }
                    return users;
                })
            }
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, followed: false }
                    }
                    return users;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }

        case CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.page }

        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.total }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }


        default:
            return state
    };
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changeCurrentPage = (page) => ({ type: CHANGE_CURRENT_PAGE, currentPage: page });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: FOLLOWING_PROGRESS, isFetching, userId });

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        ProfileAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(response.items));
        });
    }
}

export const followOrUnFollowThunkCreator = (type, usersId) => {
    return (dispatch) => {
        if (type === UNFOLLOW) {
            dispatch(toggleFollowingProgress(true, usersId))
                usersPageAPI.unFollow(usersId).then(response => {
                    if (response.resultCode === 0) {
                        dispatch(unFollow(usersId))
                    } else if (response.resultCode === 1) {
                        alert(response.messages)
                    }
                    dispatch(toggleFollowingProgress(false, usersId))
                })
            } else if (type === FOLLOW) {
                dispatch(toggleFollowingProgress(true, usersId))
                usersPageAPI.follow(usersId).then(response => {
                    if (response.resultCode === 0) {
                        dispatch(follow(usersId))
                    } else if (response.resultCode === 1) {
                        alert(response.messages)
                    }
                    dispatch(toggleFollowingProgress(false, usersId))
                })
            }

    }
}


export default usersReducer;