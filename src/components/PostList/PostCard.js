import "./PostList.css"
import { Link } from "react-router-dom"

export const PostCard = ({ post }) => {
    return <>

    
        <div className="post-card-container">
            <div className="post-card-text">
                <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }} className="post-link">
                    <h1>{post?.title}</h1>
                </Link>
                <p>{post?.category?.label}</p>
                <p>Written by: {post?.user?.first_name} {post?.user?.last_name}</p>
                <p>Published: {new Date(post?.publication_date).toLocaleDateString('en-US', { timeZone: 'UTC' })}</p>

            </div>
            <div className="post-card-image-container">
                <img className="post-card-image" src={post?.image_url} />
            </div>
        </div>
    
    </>
}