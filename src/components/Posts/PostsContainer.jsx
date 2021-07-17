import React from "react";
import Profile from "./Posts";
import { connect } from "react-redux";
import { setUserProfile, profilePageThunkCreator } from '../../redux/profileReducer'
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 18270;
        }
        this.props.profilePageThunkCreator(userId)
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
    profile: state.profilePage.profile,
})


let Compose = compose( connect(mapStateToProps, { setUserProfile, profilePageThunkCreator }), withRouter, withAuthRedirect )(ProfileContainer)

export default Compose;