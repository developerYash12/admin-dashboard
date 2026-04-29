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
import ProtectedRoute from "./routes/ProtectedRoute";
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

                <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>} />
                <Route path="/users" element={<ProtectedRoute> <UserTable /></ProtectedRoute>} />
                <Route path="/user/:id" element={<ProtectedRoute> </ProtectedRoute>} />
                <Route path="/posts" element={<ProtectedRoute><Posts /> <UserShow /></ProtectedRoute>} />
                <Route path="/postEdit/:id" element={<ProtectedRoute> <PostEdit /></ProtectedRoute>} />
                <Route path="/comment" element={<ProtectedRoute> <Comments /></ProtectedRoute>} />
                <Route path="/todo" element={<ProtectedRoute><Todo/> </ProtectedRoute>} />
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
