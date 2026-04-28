import { useNavigate } from "react-router-dom";
import React from "react";
const login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {

        if (
          email === "admin@gmail.com" &&
          password === "123456"
        ) {
      
          localStorage.setItem("token", "admin-token");
      
          navigate("/dashboard");
      
        } else {
          alert("Invalid credentials");
        }
      };
    const [state, setState] = React.useState("login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <>
   <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">

<form
  onSubmit={handleSubmit}
  className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl px-8 py-10 shadow-2xl"
>
  <h1 className="text-white text-3xl font-semibold text-center">
    {state === "login" ? "Login" : "Sign Up"}
  </h1>

  <p className="text-gray-300 text-sm text-center mt-2">
    Please sign in to continue
  </p>

  {state !== "login" && (
    <div className="flex items-center mt-8 w-full bg-white/10 border border-white/20 focus-within:border-indigo-500 h-12 rounded-full px-5 gap-3 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="text-gray-300"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
  )}

  <div className="flex items-center mt-5 w-full bg-white/10 border border-white/20 focus-within:border-indigo-500 h-12 rounded-full px-5 gap-3 transition-all">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="text-gray-300"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>

    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="flex items-center mt-5 w-full bg-white/10 border border-white/20 focus-within:border-indigo-500 h-12 rounded-full px-5 gap-3 transition-all">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="text-gray-300"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>

    <input
      type="password"
      name="password"
      placeholder="Enter your password"
      className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
      value={formData.password}
      onChange={handleChange}
      required
    />
  </div>

  <div className="mt-4 text-right">
    <button
      type="button"
      className="text-sm text-indigo-400 hover:text-indigo-300 transition"
    >
      Forgot Password?
    </button>
  </div>

  <button
    type="submit"
    onClick={handleLogin}
    className="mt-6 w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition duration-300"
  >
    {state === "login" ? "Login" : "Sign Up"}
  </button>

  <p
    onClick={() =>
      setState((prev) => (prev === "login" ? "register" : "login"))
    }
    className="text-gray-300 text-sm text-center mt-6 cursor-pointer"
  >
    {state === "login"
      ? "Don't have an account?"
      : "Already have an account?"}

    <span className="text-indigo-400 hover:underline ml-1">
      Click here
    </span>
  </p>
</form>

<div className="fixed inset-0 -z-10 overflow-hidden">
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/20 blur-3xl rounded-full" />

  <div className="absolute bottom-10 right-10 w-[300px] h-[200px] bg-purple-600/20 blur-3xl rounded-full" />
</div>
</div>
        </>
    )
}
export default login;