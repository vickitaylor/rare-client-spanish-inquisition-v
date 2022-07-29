export const getAllTags = () => {
    return fetch("http://localhost:8088/tags")
        .then(res => res.json())
};

export const saveTag = (tag) => {
    return fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    }).then(getAllTags);
};

export const deleteTag = (tagId) => {
    return fetch(`http://localhost:8088/tags/${tagId}`, {
        method: "DELETE"
    })
};

export const editTag = tag => {
    return fetch(`http://localhost:8088/tags/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
};
