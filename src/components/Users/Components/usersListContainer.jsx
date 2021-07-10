import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../../redux/usersReducer";
import UsersList from "./usersList";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);