import './App.css';
import { Route, withRouter } from "react-router-dom";
import Navbar from "./components/Header/navbar";
import ProfileContainer from './components/Posts/PostsContainer';
import UsersAPIComponent from './components/Users/Components/usersListContainer';
import HeaderContainer from './components/Header/headerContainer';
import DialogsContainer from './components/Dialogs/components/MessagesContainer'
import Login from './components/Login/Login';
import LogoutCont from './components/Login/Logout';
import React from 'react';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/commons/preloader';


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) { return <Preloader /> }
        return (
            <div className="App">
                <HeaderContainer />
                <Navbar />
                <div>
                    <Route path='/messages' render={() => <DialogsContainer />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/users' render={() => <UsersAPIComponent />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/logout' render={() => <LogoutCont />} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);