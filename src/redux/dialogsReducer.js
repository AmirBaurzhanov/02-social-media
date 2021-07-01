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
    let stateCopy = {
        ...state,
        // messagesData: [...state.messagesData],
    }
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy

        case 'UPDATE-NEW-MESSAGE-TEXT':
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;

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