import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addPost } from "../../managers/PostManager"


export const PostForm = ({ token }) => {
    const navigate = useNavigate()

    const [post, setPost] = useState({
        user_id: token,
        category_id: 1,
        title: "",
        publication_date: "",
        image_url: "",
        content: "",
        approved: 1
    })

    const handleControlledInputChange = (event) => {
        const newPost = {...post}
        newPost[event.target.name] = event.target.value
        setPost(newPost)
    }

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

                    {/* <div className="field">
                        <label htmlFor="tagId" className="label">Tags</label>
                        <div className="control">
                            <div className="checkboxes">
                                {
                                    tags.map(tag => (
                                        <div>
                                            <p>{tag.name}</p>
                                            <input
                                                type="checkbox"
                                                id="topping"
                                                name="topping"
                                                value={tag.id}
                                                onChange={() => handleTagBoolChange(tag.id)}
                                                checked={tagBooleans[(tag.id) - 1]}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                        </div> 
                        */}

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