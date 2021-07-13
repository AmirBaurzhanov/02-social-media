import PostInfo from "./Post";
import {connect} from "react-redux";
import {updateNewPostText, addPost} from '../../../redux/profileReducer'

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage
    }
}

const postContainer = connect(mapStateToProps, {updateNewPostText, addPost})(PostInfo);

export default postContainer;
