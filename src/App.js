import './App.css';
import Header from "./components/Header/header";
import Messages from "./components/Dialogs/components/Messages.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Header/navbar";
import Profile from "./components/Posts/Posts";
import state from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div>
                    <Route exact path='/messages' render={() => <Messages dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route exact path='/profile' render={ () => <Profile postsData={props.postsData} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
