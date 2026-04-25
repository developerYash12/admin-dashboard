import { useEffect, useState } from "react";
import { getUsers } from "../../services/api";
import { useNavigate } from "react-router-dom";



const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showBox, setShowBox] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {

    try {
      await Promise.all(
        selectedIds.map(id =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
          })
        )
      );
      const updateItems = users.filter((item) => !selectedIds.includes(item.id));
      setUsers(updateItems);
      alert('user delete')
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

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading users...</p>
      </div>
    );
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-8 bg-white p rounded-xl shadow">
      <input
        type="text"
        placeholder="Search"
        className="mb-4 px-3 py-2 border rounded-lg"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowDropdown(true);
        }}
      />

 
      {showDropdown && search && (
        <div className="absolute w-full bg-white border rounded-lg mt-1 shadow max-h-40 overflow-y-auto z-10">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearch(user.name);
                setShowDropdown(false);
              }}
            >
              {user.name}
            </div>
          ))}
        </div>
      )}

      {showBox && setSelectedIds && (
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

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                />
              </td>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Id
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Website
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold">
                Phone
              </th>
            </tr>
          </thead>

          <tbody>
            
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 p-4">
                  No user found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
       
                <tr key={user.id} className="border-t hover:bg-gray-300 cursor-pointer"
                onClick={() => navigate(`/user/${user.id}`)} 
                >
              
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedIds([...selectedIds, user.id]);
                        } else {
                          setSelectedIds(selectedIds.filter(id => id !== user.id));
                        }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();  
                        handleFocus(e);
                      }}
                    />
                  </td>
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.website}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;