// Data
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                name: 'User',
                text: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._rerenderEntireTree(this._state)
        }
    },
    ActionCreator (type, message) {
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
    }
}

export default store;