import React from "react";
import Profile from "./Posts";
import { connect } from "react-redux";
import { setUserProfile, profilePageThunkCreator, getStatus, updateStatus } from '../../redux/profileReducer'
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.profilePageThunkCreator(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


let Compose = compose(connect(mapStateToProps, { setUserProfile, profilePageThunkCreator, getStatus, updateStatus }),
    withRouter, withAuthRedirect)(ProfileContainer)

export default Compose;