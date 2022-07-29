export const getAllComments = () => {
    return fetch(`http://localhost:8088/comments`)
        .then(response => response.json())
}

export const addComment = (comment) => {
    return fetch("http://localhost:8088/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
        body: JSON.stringify(comment)
    })
        .then(response => response.json())
}

export const deleteComment = (commentId) => {
    return fetch(`http://localhost:8088/comments/${commentId}`, {
        method: "DELETE"
    })
}
export const editComment = comment => {
    return fetch(`http://localhost:8088/comments/${comment.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
}
