import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { PostForm } from "../components/postForm/PostForm"
import { Authorized } from "./Authorized"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route element={<Authorized token={token} />}>
        {
          <Route path="create" element={<PostForm token={token} />}/>
        }
        
      </Route>
    </Routes>
  </>
}
