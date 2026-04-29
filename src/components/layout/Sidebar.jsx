import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/login");
  }
  return (
    <div className="h-screen w-64 bg-slate-900 text-white p-5 fixed">
   

      <h1 className="text-2xl font-bold mb-8 text-blue-400">
        Admin Panel
      </h1>

 
      <ul className="space-y-3">
      <li>
      <NavLink
            to="/dashboard"
            className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
            
          >
            Dashboard
          </NavLink>
        </li>
        <NavLink
            to="/users"
            className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
          >
            Users
          </NavLink>
        
        <NavLink
            to="/posts"
            className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
          >
            Posts
          </NavLink>
    
        
    
          <NavLink
            to="/comment"
            className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
          >
            Comments
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
          >
            Todo
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
            `block p-3 rounded-lg ${
              isActive ? "bg-slate-700" : "hover:bg-slate-700"
            }`
          }
          onClick={handleLogout}
          >
            Logout
          </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;