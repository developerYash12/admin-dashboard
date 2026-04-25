
import { useContext } from "react";
import { ThemeContext } from "../../../context/themContext";
const Navbar = () => {
 
    return (
      <div className="w-full sticky top-0 z-10 h-16  bg-slate-900 text-white  shadow flex items-center justify-between px-6 rounded-lg  ">
        
 
      <button>
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
</svg>
      </button>
      

  
      
        <div className="flex items-center gap-4">
        <div>
    
    </div>
          
 
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
  
       
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
            <span className="text-white font-medium">
              Yash
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;