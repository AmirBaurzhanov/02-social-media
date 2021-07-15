import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Header/navbar";
import ProfileContainer from './components/Posts/PostsContainer';
import UsersAPIComponent from './components/Users/Components/usersListContainer';
import HeaderContainer from './components/Header/headerContainer';
import {DialogsContainer} from './components/Dialogs/components/MessagesContainer'
import Login from './Login/Login';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer />
                <Navbar />
                <div>
                    <Route exact path='/messages' render={() => <DialogsContainer />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/users' render={() => <UsersAPIComponent />} />
                    <Route path='/login' render={() => <Login />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
