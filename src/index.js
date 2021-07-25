import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/redux";
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

export default rerenderEntireTree;

