import React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { setAuthUserData, authThunkCreator } from '../../redux/authReducer'
import { compose } from "redux";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authThunkCreator()
    }

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

let Compose = compose(connect(mapStateToProps, { setAuthUserData, authThunkCreator }))(HeaderContainer)

export default Compose;