import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Header/navbar";
import ProfileContainer from './components/Posts/PostsContainer';
import UsersAPIComponent from './components/Users/Components/usersListContainer';
import dialogsContainer from './components/Dialogs/components/MessagesContainer';
import HeaderContainer from './components/Header/headerContainer';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer />
                <Navbar />
                <div>
                    <Route path='/messages' render={() => <dialogsContainer />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/users' render={() => <UsersAPIComponent />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
