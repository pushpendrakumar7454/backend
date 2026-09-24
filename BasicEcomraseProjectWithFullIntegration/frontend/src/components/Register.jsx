import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router";
import { useAuthApi } from "../hooks/api";


const Register = () => {

 
  const { setUser, setAccessToken } = useAuth();
   const navigate= useNavigate()

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });
  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

   const {registerApi}=useAuthApi()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await registerApi(formValues);
      setAccessToken(res.accessToken);
      setUser(res.data.user);
      navigate("/login")
      console.log(res.accessToken);

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              name="name"
              value={formValues.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              name="email"
              value={formValues.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number
            </label>
            <input
              name="number"
              value={formValues.number}
              onChange={handleChange}
              type="tel"
              placeholder="Enter your number"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              name="password"
              value={formValues.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
