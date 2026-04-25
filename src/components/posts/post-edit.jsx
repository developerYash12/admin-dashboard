import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 

const postEdit = () =>{
  const [post, setPost] = useState({
    title: '',
    body: '',
    userName:''
  })
  const {id} = useParams();
 

  useEffect(() => {
    if (!id) return;
  
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost((prev) => ({
          ...prev,
          title: data.title,
          body: data.body,
        }));
  
        // 👇 second API call
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      })
      .then((res) => res.json())
      .then((user) => {
        setPost((prev) => ({
          ...prev,
          userName: user.name,
        }));
      });
  }, [id]);

  
  
    return(
      <>
      <div className="w-full bg-gray-100 flex items-center justify-center p-6">
  <div className="w-full  bg-white shadow-lg rounded-2xl p-6 space-y-5">

    <h2 className="text-2xl font-semibold text-gray-800">Edit Post</h2>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        User Name
      </label>
      <input
        type="text"
        
        placeholder="Enter user name"
        value={post.userName}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Title
      </label>
      <input
      value={post.title}
        type="text"
        placeholder="Enter post title"
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Body
      </label>
      <textarea
        rows="5"
        value={post.body}
        placeholder="Write your post..."
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      ></textarea>
    </div>

    <div className="flex justify-end gap-3 pt-4">
    
      <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Save
      </button>
    </div>

  </div>
</div>
      </>
    )
}
export default postEdit;