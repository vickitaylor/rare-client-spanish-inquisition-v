import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editComment, getAllComments } from "../../managers/CommentManager"
import { getPostById } from "../../managers/PostManager"
import { deleteComment } from "../../managers/CommentManager"
import "./CommentList.css"


export const CommentsList = () => {

    const { postId } = useParams()
    const [currentPost, setCurrentPost] = useState({})
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

    // function to delete a comment
    const deleteButton = (id) => {
        deleteComment(id)
    // function to edit tags
    const editButton = (commentObj) => {
        editComment(commentObj)
            .then(() => {
                getAllComments()
                    .then(setComments)
            })
    }
<<<<<<< HEAD
=======

>>>>>>> main


    // {/* DELETE BUTTON */ }

    // <button className="dt_btn" key={`delete--category--btn--${category.id}`}
    //     onClick={() => {
    //         const confirmBox = window.confirm("Do you really want to delete this category?")
    //         if (confirmBox === true) {
    //             deleteButton(category.id)
    //         }
    //     }}>

<<<<<<< HEAD
    //     ❌</button>
=======
        
    <button className="button" onClick={() => navigate(`/CommentsForm/${currentPost?.id}`)}>
                                        Add Comment</button>
    <section className="">
        {
            filteredComments.map(
                (comment) => {
                    return <article className="post-card-container" key={`comment--${comment.id}`}>
                        {/* edit button */}
                        <button className="dt_btn" key={`edit-comment-btn--${comment.id}`} onClick={() => {
                                            const editBox = window.prompt("Edit this comment?", "")
                                            const commentCopy = { ...comment }
                                            commentCopy.content = editBox
                                            editButton(commentCopy)
                                        }}>⚙️</button>
                        <p>{comment.author_id}</p>
                        <p>{comment.content}</p>
                        <p></p>
                    </article>
                }
            )
        }
>>>>>>> main

    // return <>
    //     <h1>{currentPost.title} Comments</h1>


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