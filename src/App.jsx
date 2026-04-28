import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from './features/dashboard/dashboard/homePage'
import Navbar from "./components/layout/navbar/Navbar";
import UserTable from "./features/dashboard/UserTable";
import Posts from "./components/posts/Posts";
import PostEdit from "./components/posts/post-edit";
import UserShow from "./features/dashboard/user-view";
import Todo from "./components/todo/Todo";
import Comments from "./components/comments/comments";
import Login from "./components/login/Login";

function App() {


  return (
   
    <>
  <Routes>

    <Route path="/login" element={<Login />} />

    <Route
      path="*"
      element={
        <div className="flex min-h-screen bg-gray-100">

          <Sidebar />

          <div className="flex-1 p-5 ml-64 flex flex-col">

            <Navbar />

            <main className="p-6">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<UserTable />} />
                <Route path="/user/:id" element={<UserShow />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/postEdit/:id" element={<PostEdit />} />
                <Route path="/comment" element={<Comments />} />
                <Route path="/todo" element={<Todo />} />
              </Routes>
            </main>
          </div>
        </div>
      }
    />
  </Routes>
</>
  )
}

export default App
