import ProfileInfo from "./components/ProfileInfo";
import PostInfo from "./components/Post";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostInfo postsData={props.postsData}/>
        </div>
    )
}

export default Profile;