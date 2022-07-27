import "./PostList.css"

export const PostCard = ({post}) => {
    return <>

    <div className="post-card-container">
        <div className="post-card-text">
            <h1>{post?.title}</h1>
            <p>{post?.category?.label}</p>
            <p>Written by: {post?.user?.first_name} {post?.user?.last_name}</p>
            <p>Published: {post?.publication_date}</p>

        </div>
        <div className="post-card-image-container">
            <img className="post-card-image" src={post?.image_url} />
        </div>
    </div>
    </>
}