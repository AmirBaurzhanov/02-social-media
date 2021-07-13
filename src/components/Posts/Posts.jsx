import ProfileInfo from "./components/ProfileInfo";
import PostsContainer from "./components/PostContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <PostsContainer />
        </div>
    )
}

export default Profile;