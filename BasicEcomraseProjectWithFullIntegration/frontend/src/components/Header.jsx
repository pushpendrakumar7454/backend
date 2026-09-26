
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import useApi from "../config/apiInstance";
import { useAuthApi } from "../hooks/api";

const Header = () => {
  const { user, setUser } = useAuth();

  const api = useApi();

  const { logoutUser } = useAuthApi();

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await api.get("/auth/me");

      console.log("ME RESPONSE:", res.data);

      setUser(res.data.data.user);
    } catch (error) {
      console.log("DATA:", error.response?.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const logOutUser = () => {
    try {
      logoutUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
              E
            </div>

            <div>
              <div className="text-xl font-extrabold tracking-tight text-gray-900">
                E-Shop
              </div>

              <p className="hidden text-[11px] font-medium text-gray-400 sm:block">
                Shop smarter
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-1 rounded-xl border border-gray-100 bg-gray-50/80 p-1.5 md:flex">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-sm"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-sm"
                }`
              }
            >
              All Products
            </NavLink>

            <NavLink
              to="/create-product"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-sm"
                }`
              }
            >
              Create Product
            </NavLink>

          </nav>

          {/* User Section */}
          <div className="flex items-center gap-3">

            {/* User Profile */}
            <div className="hidden items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md">
                {user?.name?.charAt(0)?.toUpperCase()}
              </div>

              <div className="leading-tight">
                <p className="text-[11px] font-medium text-gray-400">
                  Welcome back
                </p>

                <p className="max-w-28 truncate text-sm font-bold text-gray-800">
                  {user?.name}
                </p>
              </div>
            </div>

            {/* Mobile User Avatar */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white sm:hidden">
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>

            {/* Logout */}
            <button
              onClick={logOutUser}
              className="group flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/20 transition-all duration-200 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1"
                />
              </svg>

              <span className="hidden sm:inline">
                Logout
              </span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

