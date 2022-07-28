import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const CommentsForm = ({ token }) => {


    const navigate = useNavigate()
    const { post_id } = useParams()

    const [comments, create] = useState({
        
        post_id: post_id,
        author_id: parseInt(token),
        content: ""
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
    

        const newComment = {
        post_id: post_id,
        author_id: parseInt(token),
        content: comments.content
        }

        return fetch('http://localhost:8088/comments',{
            method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(newComment)
        })
            .then(res => res.json())
            .then(() => {
                navigate(`/commentsList/:postId`)
            })
    }

    return(
    <>
    <form className="commentForm">
            <h2 className="commentTitle">Leave a Comment below</h2>
                     
            <fieldset>
                <div className="form-group">
                    <input
                        required autoFocus
                        type="text"
                        
                        maxLength={250}
                        className="form-control"
                        value={comments.content}
                        onChange={
                            (evt) => {
                                const copy = { ...comments }
                                copy.content = evt.target.value
                                create(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="">
                Submit comment
            </button>
        </form>
        </>
    )
}