const dialogsReducer = (state, action) => {
    switch (action.type) {
        case action.type === 'ADD-MESSAGE':
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state
        case action.type === 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage;
        default:
            return state
    }
}

export default dialogsReducer;