import React from "react";
import Profile from "./Posts";
import { connect } from "react-redux";
import { setUserProfile } from '../../redux/profileReducer'
import { withRouter } from "react-router-dom";
import { profilePageAPI } from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 18270;
        }
        profilePageAPI.setUsers(userId).then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, })(withURLDataContainerComponent);