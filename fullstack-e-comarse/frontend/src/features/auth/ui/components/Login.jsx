import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAccessToken, addUser } from "../../state/authSlice";
import { loginUser } from "../../api/useApi";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 10,
                  message: "Email must be at least 10 characters",
                },
              })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2.5 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
