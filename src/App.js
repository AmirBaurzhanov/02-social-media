import './App.css';
import Header from "./components/Header/header";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Header/navbar";
import Profile from "./components/Posts/Posts";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div>
                    <Route exact path='/messages' render={() => <Dialogs/>}/>
                    <Route exact path='/profile' render={() => <Profile/>}/>
                    <Route exact path='/find-users' render={() => <Users/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
