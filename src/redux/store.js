// Data

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', name: 'Amir', text: 'Hi! lorem ipsum dolor sit amet', likeCount: 20},
                {id: '2', name: 'Dimych', text: 'How are you?', likeCount: 20},],
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                {id: '1', name: 'Amir'},
                {id: '2', name: 'Dymich'},
                {id: '3', name: 'Andrey'},
                {id: '4', name: 'Victor'},
            ],
            messagesData: [
                {id: '1', message: 'Hi!'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'What are you doing?'},
            ],
            newMessageText: '',
        }
    },
    _rerenderEntireTree() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;  // Наблюдатель паттерн
    },
    dispatch(action) {  // {  Type: 'ADD-POST'  }
        // ProfileReducer Zone
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        // DialogsReducer Zone
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._rerenderEntireTree(this._state);
    },
    ActionCreator(type, message) {
        if (type === 'addPost') {
            const action = {
                type: 'ADD-POST'
            }
            return action
        } else if (type === 'updatePost') {
            const action = {
                type: 'UPDATE-NEW-POST-TEXT',
                newText: message,
            }
            return action
        } else if (type === 'addMessage') {
            const action = {
                type: 'ADD-MESSAGE'
            }
            return action
        } else if (type === 'updateMessage') {
            const action = {
                type: 'UPDATE-NEW-MESSAGE-TEXT',
                newMessage: message,
            }
            return action
        }
    },
}


export default store;