let initialState = {
    postsData: [
        {id: '1', name: 'Amir', text: 'Hi! lorem ipsum dolor sit amet', likeCount: 20},
        {id: '2', name: 'Dimych', text: 'How are you?', likeCount: 20},],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 3,
                name: 'User',
                text: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        }
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