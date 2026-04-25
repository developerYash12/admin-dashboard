import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserShow = () => {
  const [user, setUser] = useState(null);
  const {id} = useParams()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  
  return (
    <div className="flex justify-center items-center  bg-gradient-to-br p-6">
    <div className="bg-white overflow-hidden shadow-lg rounded-xl border w-full max-w-2xl">
  
     
      <div className="px-6 py-5">
        <h3 className="text-xl font-semibold text-gray-900">
          User Profile
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          This is some information about the user.
        </p>
      </div>
  
    
      <div className="border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
  
          <div className="py-4 grid grid-cols-3 gap-4 px-6">
            <dt className="text-sm font-medium text-gray-500">
              ID
            </dt>
            <dd className="text-sm text-gray-900 col-span-2">
              {user?.id}
            </dd>
          </div>
  
          <div className="py-4 grid grid-cols-3 gap-4 px-6">
            <dt className="text-sm font-medium text-gray-500">
              Full name
            </dt>
            <dd className="text-sm text-gray-900 col-span-2">
              {user?.name}
            </dd>
          </div>
  
          <div className="py-4 grid grid-cols-3 gap-4 px-6">
            <dt className="text-sm font-medium text-gray-500">
              Email address
            </dt>
            <dd className="text-sm text-gray-900 col-span-2 break-all">
              {user?.email}
            </dd>
          </div>
  
          <div className="py-4 grid grid-cols-3 gap-4 px-6">
            <dt className="text-sm font-medium text-gray-500">
              Phone number
            </dt>
            <dd className="text-sm text-gray-900 col-span-2">
              {user?.phone}
            </dd>
          </div>
  
        </dl>
      </div>
  
      
      <div className="p-6">
        <button
          onClick={() => window.history.back()}
          className="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition"
        >
          Back
        </button>
      </div>
  
    </div>
  </div>
  );
};

export default UserShow;