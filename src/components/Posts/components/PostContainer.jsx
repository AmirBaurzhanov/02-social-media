import {actionCreator} from "../../../redux/profileReducer";
import PostInfo from "./Post";

// Dirty Dirty

const PostsContainer = (props) => {
    let state = props.store.getState();
    let sendPostClick = () => {
        props.store.dispatch((actionCreator('addPost')))
    }
    let onPostChange = (body) => {
        props.store.dispatch((actionCreator('updatePost', body)))
    }
    return (
        <div>
            <PostInfo sendPostClick = {sendPostClick} onPostChange = {onPostChange} postsData = {state.profilePage.postsData}/>
        </div>
    )
}

export default PostsContainer;