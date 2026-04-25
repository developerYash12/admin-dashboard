const HomePage = () => {
  return (
    <div className="flex-grow bg-gray-100 min-h-screen p-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Total Users</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">1,245</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Revenue</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">₹45,200</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Orders</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">320</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-500 text-sm">Growth</p>
            <h2 className="text-2xl font-bold text-green-600 mt-2">+12%</h2>
          </div>

        </div>

        <div className="mt-10 bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Monthly Growth
          </h2>

          <div className="flex items-end justify-between h-40 gap-2">

            <div className="w-full bg-indigo-400 rounded-t-md" style={{ height: "40%" }}></div>
            <div className="w-full bg-indigo-500 rounded-t-md" style={{ height: "60%" }}></div>
            <div className="w-full bg-indigo-600 rounded-t-md" style={{ height: "80%" }}></div>
            <div className="w-full bg-indigo-400 rounded-t-md" style={{ height: "50%" }}></div>
            <div className="w-full bg-indigo-500 rounded-t-md" style={{ height: "70%" }}></div>
            <div className="w-full bg-indigo-600 rounded-t-md" style={{ height: "90%" }}></div>
            <div className="w-full bg-indigo-400 rounded-t-md" style={{ height: "65%" }}></div>

          </div>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800">
              Analytics
            </h2>
            <p className="text-gray-500 mt-2">
              Track user activity and performance insights.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800">
              Reports
            </h2>
            <p className="text-gray-500 mt-2">
              Generate detailed reports for business growth.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-800">
              Settings
            </h2>
            <p className="text-gray-500 mt-2">
              Manage your account and preferences.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HomePage;