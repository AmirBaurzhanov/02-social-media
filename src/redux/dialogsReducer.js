const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        { id: '1', name: 'Amir' },
        { id: '2', name: 'Dymich' },
        { id: '3', name: 'Andrey' },
        { id: '4', name: 'Victor' },
    ],
    messagesData: [
        { id: '1', message: 'Hi!' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'What are you doing?' },
    ],
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageBody
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }

        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;