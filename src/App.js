import './App.css';
import Header from "./components/Header/header";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Header/navbar";
import Profile from "./components/Posts/Posts";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div>
                    <Route exact path='/messages' render={() => <Dialogs data={props.state.dialogsPage}/>}/>
                    <Route exact path='/profile' render={ () => <Profile data={props.state.profilePage} addPost={props.addPost} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
