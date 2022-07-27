import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Categories } from "../components/categories/Categories"
import { PostForm } from "../components/postForm/PostForm"
import { PostDetails } from "../components/PostList/PostDetails"
import { PostList } from "../components/PostList/PostList"
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
            <Route path="categories" element={<Categories />} />
            <Route path="/post/:postId" element={ <PostDetails /> } />
          </>
        }
        
      </Route>
    </Routes>
  </>
}
