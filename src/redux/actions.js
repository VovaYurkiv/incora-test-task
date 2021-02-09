
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        payload: post
    }
}