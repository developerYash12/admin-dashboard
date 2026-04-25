import { useEffect, useState } from "react";

const  Comments = () => {
    const [comment, setComment] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((res) => res.json())
          .then((data) => setComment(data));
      }, []);

    const filterComment = comment.filter((post)=>
    post.email.toLowerCase().includes(search.toLowerCase())
    )
return(
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
           
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Body</th>
              <th className="px-6 py-3">Post</th>
            </tr>
          </thead>

          <tbody>
            {filterComment.map((post) => (
              <tr key={post.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                 ></input>
              </td>
                <td className="px-6 py-4">{post.id}</td>
              
                <td className="px-6 py-4">{post.email}</td>
                <td className="px-6 py-4">{post.body}</td>
                <td className="px-6 py-4">
                  {post.body.substring(0, 50)}...
                </td>
               
                <td>
              
            
               
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
 
)
}
export default Comments;