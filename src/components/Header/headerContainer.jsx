import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { setAuthUserData } from '../../redux/authReducer'
import { compose } from "redux";


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

let Compose = compose(connect(mapStateToProps, { setAuthUserData }))(HeaderContainer)

export default Compose;