import { authThunkCreator } from "./authReducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

export const setInitalize = () => ({ type: SET_INITIALIZED })

export const initializeApp = () => (dispatch) => {
    let dispatchEnd = dispatch(authThunkCreator());
    dispatchEnd.then(() => {
        dispatch(setInitalize());
    })
}


export default appReducer;