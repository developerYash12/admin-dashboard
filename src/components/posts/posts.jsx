import { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate  } from "react-router-dom";
import postEdit from "./post-edit";;

 const Posts = () =>  {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage ] = useState(1);
  const [showBox, setShowBox] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_expand=user")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedIds.map(id =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
          })
        )
      );
      const updateItems = posts.filter((item) => !selectedIds.includes(item.id));
      setPosts(updateItems);
      alert('post delete')
    } catch (error) {
      console.error("Delete failed", error);
    }

    setShowBox(false);
    setInputValue("");
    setSelectedIds([]);
  };

  const handleFocus = () => {
    setShowBox(true);
  };




  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      
   
      <div className="flex gap-4 mb-6 ">
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      <div className="overflow-x-auto bg-white shadow rounded-lg">
      {showBox &&  selectedIds.length &&(
        <div className="flex justify-between items-center border p-3 mt-2">
          <span>Item Selected</span>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}

        
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
            <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                />
              </td>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Body</th>
              <th className="px-6 py-3">Excerpt</th>
              <th className="px-6 py-3">User</th>
            </tr>
          </thead>

          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds([...selectedIds, post.id]);
                    } else {
                      setSelectedIds(selectedIds.filter(id => id !== post.id));
                    }
                  }}
                  onClick={handleFocus}
                />
              </td>
                <td className="px-6 py-4">{post.id}</td>
                <td className="px-6 py-4">{post.title}</td>
                <td className="px-6 py-4">{post.body}</td>
                <td className="px-6 py-4">
                  {post.body.substring(0, 50)}...
                </td>
                <td className="px-6 py-4">
                  {post.user?.name || "Unknown"}
                </td>
                <td>
                <NavLink
              to={`/postEdit/${post.id}`}
              
               >
             <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
           
          >
                  Edit
                 </button>
                 </NavLink>
            
               
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    
  );
  
}
export default Posts;