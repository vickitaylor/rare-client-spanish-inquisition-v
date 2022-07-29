import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {getCategories} from "../../managers/CategoryManager"
import { editPost } from "../../managers/PostManager"

export const EditPosts = () => {
    const [post, update] = useState({
                category_id: "",
                title: "",
                image_url: "",
                content:"",
    })
    const { postId } = useParams()
    const navigate = useNavigate()
    const [categories,setCatergories] = useState([])
	useEffect(() =>{
		getCategories()
			.then (setCatergories)
	}, [])
    useEffect(() => {
        fetch(`http://localhost:8088/posts/${postId}`)
            .then(response => response.json())
            .then((data) => {
                update(data)
            })
    }, [postId])

	const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newEntry = { ...post }
        newEntry[event.target.name] = event.target.value
        update(newEntry)
    }
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
			debugger
        return fetch(`http://localhost:8088/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(() => {
                navigate(`/post/${postId}`)
            })
    }

    const constructUpdatedPost = (postObject) => {
        
        editPost(postObject)
            .then(() => {
                navigate("/post/${post.id}")
            })
    }
    return <form className="postForm">
        <h2 className="PostForm__title">Edit Post Card</h2>
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
                                    handleSaveButtonClick(evt)
                                }}
                                className="button is-link">
                                Save Edits
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </article>
        
    </form>
}