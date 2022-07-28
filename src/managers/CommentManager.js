export const getAllComments = () => {
    return fetch(`http://localhost:8088/comments`)
        .then(response => response.json())
}

export const addComment = () => {
    return fetch("http://localhost:8088/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
}