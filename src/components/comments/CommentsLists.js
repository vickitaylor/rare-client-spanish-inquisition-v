import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllComments } from "../../managers/CommentManager"
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
            .then(() => {
                getAllComments()
                    .then(setComments)
            })
    }


    // {/* DELETE BUTTON */ }

    // <button className="dt_btn" key={`delete--category--btn--${category.id}`}
    //     onClick={() => {
    //         const confirmBox = window.confirm("Do you really want to delete this category?")
    //         if (confirmBox === true) {
    //             deleteButton(category.id)
    //         }
    //     }}>

    //     ❌</button>

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