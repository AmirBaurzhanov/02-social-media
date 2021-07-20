import PostInfo from "./Post";
import { connect } from "react-redux";
import { addPost } from '../../../redux/profileReducer'

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage,
    }
}

const postContainer = connect(mapStateToProps, { addPost })(PostInfo);

export default postContainer;
