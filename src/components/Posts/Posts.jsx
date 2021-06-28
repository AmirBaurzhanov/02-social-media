import ProfileInfo from "./components/ProfileInfo";
import PostsContainer from "./components/PostContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;