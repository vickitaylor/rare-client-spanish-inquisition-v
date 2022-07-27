export const getAllPosts = () => {
    return fetch(`http://localhost:8088/posts`)
        .then(response => response.json())
}

export const addPost = (post) => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
}

