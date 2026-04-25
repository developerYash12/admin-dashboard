import { useEffect, useState } from "react";

const TodoTable = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 15))); 
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-5">

        <h2 className="text-xl font-bold mb-4">Todo List</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg">

            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">User ID</th>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id} className="border-t hover:bg-gray-50">

                  <td className="px-4 py-2">{todo.userId}</td>
                  <td className="px-4 py-2">{todo.id}</td>
                  <td className="px-4 py-2">{todo.title}</td>

                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        todo.completed
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {todo.completed ? "Completed" : "Pending"}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default TodoTable;