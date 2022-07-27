import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPosts } from "../../managers/PostManager"
import { PostCard } from "../PostList/PostCard"

export const MyPosts = ({token}) => {

    const [posts, setPosts] = useState([])
    const [filteredposts, setfilteredPosts] = useState([])

    const navigate = useNavigate()

    useEffect(
        () => {
            getAllPosts()
                .then(setPosts)
        },
        []
    )

    useEffect(
        () => {
            const myPosts = posts.filter(post => post.user_id === parseInt(token))
            setfilteredPosts(myPosts)            

        },
        [posts]
    )

    return <>
        <h1>MY Posts</h1>
        <button onClick={() => navigate("/create")}> Add Post </button>
        {
            (posts)
            ? <>
        {
            filteredposts.map(post => <PostCard key={`post--${post.id}`}
            post={post}
            />)
        }
        </>
        : <></>
    }
    
    </>
}