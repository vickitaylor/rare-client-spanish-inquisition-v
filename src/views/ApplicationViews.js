import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Categories } from "../components/categories/Categories"
import { CommentsForm } from "../components/comments/CommentForm"
import { CommentsList } from "../components/comments/CommentsLists"
import { MyPosts } from "../components/myPosts.js/MyPosts"
import { PostForm } from "../components/postForm/PostForm"
import { PostDetails } from "../components/PostList/PostDetails"
import { PostList } from "../components/PostList/PostList"
import { TagList } from "../components/tags/TagList"
import { TagManager } from "../components/tags/TagManager"
import { Authorized } from "./Authorized"


export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        {/* Add Routes here */}
        {
          <>
            <Route path="/" element={<PostList />}/>
            <Route path="create" element={<PostForm token={token} />}/>
            <Route path="categories" element={<Categories  />} />
            <Route path="myposts" element={<MyPosts token={token} />} />
            <Route path="/post/:postId" element={ <PostDetails /> } />
            <Route path="/commentsList/:postId" element={ <CommentsList /> } />
            <Route path="/commentsForm/:postId" element={ <CommentsForm token={token} /> } />
            <Route path="tags" element={<TagList  />} />
            <Route path="manageTags/:postId" element={<TagManager />} />
          </>
        }
        
      </Route>
    </Routes>
  </>
}
