import { ADD_POST, DELETE_POST, EDIT_POST } from './actions'

export let reducer = (state = [], action) => {

    let updatedPosts;

    switch (action.type) {
        case ADD_POST:
            updatedPosts = [...state]
                updatedPosts.push(action.payload)
                return updatedPosts
        case DELETE_POST:
            updatedPosts = [...state]
                updatedPosts = updatedPosts.filter(post => post.id != action.payload)
                return updatedPosts
        case EDIT_POST:
            updatedPosts = [...state]
                let index = -1;
                for (let i = 0; i < updatedPosts.length; i++) {
                    index++
                    if (updatedPosts[i].id === action.payload.id) {
                        break
                    }
                }
                    if(index !== -1) 
                    {
                        updatedPosts[index] = action.payload
                        return updatedPosts
                    }
    }
    return state
}