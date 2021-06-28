import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux";
import StoreContext from "./storeContext";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App // state={store.getState()}
                // dispatch={store.dispatch.bind(store)}
                // store={store}
            />
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);

export default rerenderEntireTree;

