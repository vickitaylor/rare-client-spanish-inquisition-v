import { useParams } from "react-router-dom"
import { getPostById } from "../../managers/PostManager"
import { useState, useEffect } from "react"
import "./PostList.css"

export const PostDetails = () => {
    const { postId } = useParams()
    const [ currentPost, setCurrentPost ] = useState({})

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
                <h1>DELETE BUTTON</h1>
                <h3>{currentPost?.category?.label}</h3>
            </div>

            <div className="post-detail-image-div">
                <img className="post-detail-image" src={currentPost?.image_url} />
            </div>

            <div className="post-detail-info-bar">
                <h3>By: {currentPost?.user?.first_name} {currentPost?.user?.last_name}</h3>
                <h3>VIEW COMMENTS</h3>
                <h3>{new Date(currentPost?.publication_date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</h3>
            </div>
            <div className = "post-detail-body">
                <p>{currentPost?.content}</p>
            </div>
        </div>
    </div>
    
    </>
}