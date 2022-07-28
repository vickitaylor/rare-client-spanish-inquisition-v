import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllComments } from "../../managers/CommentManager"
import { getPostById } from "../../managers/PostManager"
import "./CommentList.css"


export const CommentsList = () => {

    const { postId} = useParams()
    const [ currentPost, setCurrentPost ] = useState({})
    const [comments, setComments] = useState([])
    const [filteredComments, setFilteredComments] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            getPostById(postId).then(setCurrentPost)
        },
        []
    )
    
    useEffect(
        () => {
            getAllComments().then(setComments)
        },
        []
    )

    useEffect(
        () => {
            const postsComments = comments.filter(comment => comment.post_id == currentPost.id)
            setFilteredComments(postsComments)
        },
        [comments]
    )




    return<>
        <h1>Comments</h1>
    <button className="button" onClick={() => navigate(`/CommentsForm/${currentPost?.id}`)}>
                                        Add Comment</button>
    <section className="">
        {
            filteredComments.map(
                (comment) => {
                    return <article className="post-card-container" key={`comment--${comment.id}`}>
                        <p>{comment.author_id}</p>
                        <p>{comment.content}</p>
                    </article>
                }
            )
        }

    </section>
    </>
}