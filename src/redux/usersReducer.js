const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [ 
        //{
        //     id: '1',
        //     fullName: 'Amir',
        //     status: 'Programist',
        //     location: { city: 'Nur-Sultan', country: 'Kazakhstan' },
        //     isFriend: true,
        //     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU'
        // },
        // {
        //     id: '2',
        //     fullName: 'Sasha',
        //     status: 'LOX',
        //     location: { city: 'Moscow', country: 'Russia' },
        //     isFriend: true,
        //     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU'
        // },
        // {
        //     id: '3',
        //     fullName: 'Sergei',
        //     status: 'LOX',
        //     location: { city: 'Kiev', country: 'Ukraine' },
        //     isFriend: false,
        //     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU'
        // }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, isFriend: true }
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
                        return { ...users, isFriend: false }
                    }
                    return users;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: 'FOLLOW', userId })
export const unFollowAC = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsersAC = (users) => ({ type: 'SET_USERS', users })


export default usersReducer;