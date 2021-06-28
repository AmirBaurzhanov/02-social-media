let initialState = {
    postsData: [
        {id: '1', name: 'Amir', text: 'Hi! lorem ipsum dolor sit amet', likeCount: 20},
        {id: '2', name: 'Dimych', text: 'How are you?', likeCount: 20},],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                name: 'User',
                text: state.newPostText,
                likeCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export let actionCreator = (type, message) => {
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
    }
}
export default profileReducer;