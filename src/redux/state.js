// Data

import rerenderTree from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: '1', name: 'Amir', text: 'Hi! lorem ipsum dolor sit amet', likeCount: 20},
            {id: '2', name: 'Dimych', text: 'How are you?', likeCount: 20},]
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
}

export let addPost = (postMessage) => {
    let getLastChild = state.profilePage.postsData
    let newPost = {
        id: 3,
        name: 'User',
        text: postMessage,
        likeCount: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderTree(state);
}

export default state;