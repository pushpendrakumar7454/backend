import React, { useEffect } from "react";
import useApi from "../config/apiInstance";
import { useAuth } from "../context/authContext";

const Profile = () => {
  const { user, setUser } = useAuth();
  const api = useApi();

  const getData = async () => {
    try {
      const res = await api.get("/auth/me");
      console.log(res);
      setUser(res.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-90 bg-white rounded-xl shadow-md p-4">
        <h1 className="text-xl font-bold text-gray-800">
          Profile
        </h1>

        <div className="mt-5 space-y-4">
          <div>
            <p className="text-sm text-gray-500">
              Name
            </p>

            <p className="text-base font-medium text-gray-800">
              {user?.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="text-base font-medium text-gray-800 break-words">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <button className="w-full cursor-pointer active:scale-95 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Edit
          </button>

          <button className="w-full cursor-pointer active:scale-95 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;



