import { ProfileAPI, profilePageAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    postsData: [
        { id: '1', name: 'Amir', text: 'Hi! lorem ipsum dolor sit amet', likeCount: 20 },
        { id: '2', name: 'Dimych', text: 'How are you?', likeCount: 20 },],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                name: 'User',
                text: state.newPostText,
                likeCount: 0
            };
            return stateCopy = {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return stateCopy = {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case SET_STATUS: {
            return { ...state, status: action.status }
        }

        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status: status })

export const profilePageThunkCreator = (userId) => {
    return (dispatch) => {
        profilePageAPI.setUsers(userId)
            .then(response => {
                dispatch(setUserProfile(response))
            });
    }
}
export const getStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}
export default profileReducer;