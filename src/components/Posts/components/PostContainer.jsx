import {actionCreator} from "../../../redux/profileReducer";
import PostInfo from "./Post";
import StoreContext from "../../../storeContext";

// Dirty Dirty

const PostsContainer = (props) => {
    return (
        <div>
            <StoreContext.Consumer>{
                (store) => {
                    let state = store.getState();
                    let sendPostClick = () => {
                        store.dispatch((actionCreator('addPost')))
                    }
                    let onPostChange = (body) => {
                        store.dispatch((actionCreator('updatePost', body)))
                    }
                    return (
                    <PostInfo sendPostClick={sendPostClick} onPostChange={onPostChange}
                              postsData={state.profilePage.postsData}/>)
                }
            }
            </StoreContext.Consumer>
        </div>
    )
}

export default PostsContainer;