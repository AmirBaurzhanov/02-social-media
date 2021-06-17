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
                {id: '4', message: 'YO'},
            ]
        }
    },
    _rerenderEntireTree() {
    },
    _addPost () {
        let newPost = {
            id: 3,
            name: 'User',
            text: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    _updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;  // Наблюдатель паттерн
    },

    dispatch(action) {  // {  Type: 'ADD-POST'  }
        if (action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)
        }
    }
}

export default store;