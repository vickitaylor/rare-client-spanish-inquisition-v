import { useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../managers/PostManager"
import { useState, useEffect } from "react"


export const PostDetails = () => {
    const { postId } = useParams()
    const [ currentPost, setCurrentPost ] = useState({})

    const navigate = useNavigate()

    useEffect(
        () => {
            getPostById(postId).then(setCurrentPost)
        },
        []
    )

    return <>
    
    <div className="details-window">
        <div className ="post-detail-container">
            <h1>{currentPost?.title}</h1>
            <div className ="post-detail-header">
                <button className="deleteButton"> DELETE BUTTON</button>
                <h3>{currentPost?.category?.label}</h3>
                <button className="editButton"  onClick={() => navigate(`/EditPosts/${currentPost?.id}`)}>EDIT BUTTON</button>
            </div>

            <div className="post-detail-image-div">
                <img className="post-detail-image" src={currentPost?.image_url} />
            </div>

            <div className="post-detail-info-bar">
                <h3>By: {currentPost?.user?.first_name} {currentPost?.user?.last_name}</h3>
                <button className="button" onClick={() => navigate(`/CommentsList/${currentPost?.id}`)}>
                                        View Comments</button>
                <h3>{new Date(currentPost?.publication_date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</h3>
            </div>
            <div className = "post-detail-body">
                <p>{currentPost?.content}</p>
            </div>
        </div>
    </div>
    
    </>
}