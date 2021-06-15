import './App.css';
import Header from "./components/Header/header";
import Messages from "./components/Dialogs/Messages.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Header/navbar";
import Posts from "./components/Posts/Posts";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div>
                    <Route exact path='/messages' render={Messages}/>
                    <Route exact path='/profile' render={Posts}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
