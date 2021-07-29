import { ProfileAPI, profilePageAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_PHOTO = 'SET-PHOTO';


let initialState = {
    postsData: [
        { id: '1', name: 'Amir', text: 'Hi! lorem ipsum dolor sit amet', likeCount: 20 },
        { id: '2', name: 'Dimych', text: 'How are you?', likeCount: 20 },],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                name: 'User',
                text: action.text,
                likeCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case SET_STATUS: {
            return { ...state, status: action.status }
        }

        case SET_PHOTO: {
            return { ...state, profile: {...state.profile, photos: action.image} }
        }

        default:
            return state
    }
}

export const addPost = (text) => ({ type: ADD_POST, text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status: status })
export const setPhoto = (image) => ({ type: SET_PHOTO, image: image })

export const profilePageThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profilePageAPI.setUsers(userId)
        dispatch(setUserProfile(response))
    }
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (image) => async (dispatch) => {
    let response = await ProfileAPI.setPhoto(image)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(image))
    }
}

export default profileReducer;