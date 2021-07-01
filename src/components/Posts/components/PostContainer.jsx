import {actionCreator} from "../../../redux/profileReducer";
import PostInfo from "./Post";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange(body) {
            dispatch((actionCreator('updatePost', body)))
        },
        sendPostClick() {
            dispatch((actionCreator('addPost')))
        }
    }
}

const postContainer = connect(mapStateToProps, mapDispatchToProps)(PostInfo);

export default postContainer;
