import './App.css';
import Header from "./components/Header/header";
import Profile from "./components/Posts/myPost";
import Messages from "./components/Dialogs/users.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Header/navbar";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div>
                    <Route path='/messages' component={Messages}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
