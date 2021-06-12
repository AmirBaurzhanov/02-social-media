import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Header/navbar";
import Post from "./components/Posts/myPost";
import Users from "./components/Dialogs/users";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/*<Post />*/}
      <Users />
    </div>
  );
}

export default App;
