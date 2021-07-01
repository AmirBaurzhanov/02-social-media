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
    let stateCopy;
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            return stateCopy = {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }

        case 'UPDATE-NEW-MESSAGE-TEXT':
            return stateCopy = {
                ...state,
                newMessageText: action.newMessage,
            }

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