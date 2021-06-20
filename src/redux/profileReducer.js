const profileReducer = (state, action) => {
    switch (action.type) {
        case action.type === 'ADD-POST':
            let newPost = {
                id: 3,
                name: 'User',
                text: state.newPostText,
                likeCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state
        case action.type === 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export default profileReducer;