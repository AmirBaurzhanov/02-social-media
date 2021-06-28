let initialState = {
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


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state
    }
}

export let actionCreator = (type, message) => {
    if (type === 'addMessage') {
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

export default dialogsReducer;