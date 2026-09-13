
import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">

        <div className="flex flex-col items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-900 text-2xl font-bold text-white">
            M
          </div>

          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            Manish
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            manish@example.com
          </p>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-5">
          <div className="flex justify-between">
            <span className="text-gray-500">Name</span>
            <span className="font-medium text-gray-900">Manish</span>
          </div>

          <div className="mt-4 flex justify-between">
            <span className="text-gray-500">Email</span>
            <span className="font-medium text-gray-900">
              manish@example.com
            </span>
          </div>
        </div>

        <button className="mt-6 w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800">
          Logout
        </button>

      </div>
    </div>
  );
};

export default Profile;

