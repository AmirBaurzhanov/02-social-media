import { AuthAPI, headerPageAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_AUTH = 'TOGGLE-IS-AUTH';

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
                isAuth: true
            }

        case TOGGLE_IS_AUTH:
            return {
                ...state,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const toggleIsAuth = (isAuth) => ({ type: TOGGLE_IS_AUTH, isAuth })

export const authThunkCreator = () => {
    return (dispatch) => {
        headerPageAPI.headerContainer()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, email, login } = response.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}


export default authReducer;