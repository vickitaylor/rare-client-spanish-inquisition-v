import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addPost } from "../../managers/PostManager"
import { getAllCategories } from "../../managers/CategoryManager"


export const PostForm = ({ token }) => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [post, setPost] = useState({
        user_id: token,
        category_id: "",
        title: "",
        publication_date: "",
        image_url: "",
        content: "",
        approved: 1
    })


    // Get category data upon loading page
    useEffect(
        () => {
            getAllCategories().then(setCategories)
        },
        []
    )

    // This function gets called whenever a field is updated. Updates "post" state variable to reflect current form entry.
    const handleControlledInputChange = (event) => {
        const newPost = {...post}
        newPost[event.target.name] = event.target.value
        setPost(newPost)
    }

    // This function is activated once form is submitted. Adds current date to post, makes POST call to add post to db, navigates back to homepage. 
    const constructNewPost = () => {
        const copyPost = { ...post }
        copyPost.publication_date = Date(Date.now()).toLocaleString('en-us').split('GMT')[0]
        addPost(copyPost)
        navigate("/")
    }


    return (
        <article className="panel is-info">
            <h2 className="panel-heading">Create Entry</h2>
            <div className="panel-block">
                <form style={{ width: "100%" }}>

                    {/* Post title input jsx */}

                    <div className="field">
                        <label htmlFor="title" className="label">Title: </label>
                        <div className="control">
                            <input type="text" name="title" required autoFocus className="input"
                                proptype="varchar"
                                placeholder="Title"
                                value={post.title}
                                onChange={handleControlledInputChange}
                            />
                        </div>
                    </div>

                    {/* Post text input jsx */}

                    <div className="field">
                        <label htmlFor="content" className="label">Content: </label>
                        <div className="content">
                            <textarea
                                className="textarea"
                                name="content"
                                value={post.content}
                                onChange={handleControlledInputChange}
                            ></textarea>
                        </div>
                    </div>

                    {/* image url input jsx */}

                    <div className="field">
                        <label htmlFor="image_url" className="label">Image Url: </label>
                        <div className="control">
                            <input type="text" name="image_url" required autoFocus className="input"
                                proptype="varchar"
                                placeholder="Image Url"
                                value={post.image_url}
                                onChange={handleControlledInputChange}
                            />
                        </div>
                    </div>

                    {/* Category Dropdown jsx */}

                    <div className="field">
                        <label htmlFor="category_id" className="label">Category:</label>
                        <div className="control">
                            <div className="select">
                                <select name="category_id"
                                    proptype="int"
                                    value={post.category_id}
                                    onChange={handleControlledInputChange}>
                                    <option value="0">Select a category</option>
                                    {categories.map(c => (
                                        <option key={c.id} value={c.id}>
                                            {c.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Submit button jsx */}

                    <div className="field">
                        <div className="control">
                            <button type="submit"
                                onClick={evt => {
                                    evt.preventDefault()
                                    constructNewPost()
                                }}
                                className="button is-link">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </article>
    )
}