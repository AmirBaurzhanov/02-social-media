import { stopSubmit } from "redux-form";
import { AuthAPI, headerPageAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const authThunkCreator = () => {
    return (dispatch) => {
        headerPageAPI.headerContainer()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, email, login } = response.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {

    AuthAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authThunkCreator());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
        }
    })
}

export const logoutThunkCreator = () => (dispatch) => {
    AuthAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authThunkCreator(null, null, null, false));
            window.location.reload()
        }
    })
}


export default authReducer;