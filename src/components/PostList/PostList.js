import { useState, useEffect } from "react"
import { PostCard } from "./PostCard"
import { getAllPosts } from "../../managers/PostManager"

export const PostList = () => {
    const [allPosts, setAllPosts] = useState([])
    
    useEffect(
        () => {
            getAllPosts().then(setAllPosts)
        },
        []
    )

    return <>
    <h1>Posts</h1>
    {
        (allPosts)
        ? <>
        {
            allPosts.map(post => <PostCard key={`post--${post.id}`}
                post={post}
            />)
        }
        </>
        : <></>
    }
    
    </>
}