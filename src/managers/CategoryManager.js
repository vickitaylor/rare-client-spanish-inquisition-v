export const getAllCategories = () => {
    return fetch(`http://localhost:8088/categories`)
        .then(response => response.json())
}