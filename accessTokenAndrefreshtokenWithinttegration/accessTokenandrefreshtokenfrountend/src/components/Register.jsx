import React, { useState } from "react";

const Register = () => {
  

    const [formValue, setFormValue] = useState({
        name:"",
        email:"",
        password:""
    })
   const handleChange=(e)=>{
    setFormValue((prev)=>({...prev,[e.target.name]:e.target.value}))
   }
   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formValue)
   }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Register your account
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>

            <input
            onChange={handleChange}
            name="name"
            value={formValue.name}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
            onChange={handleChange}
            name="email"
            value={formValue.email}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
            onChange={handleChange}
            name="password"
            value={formValue.email}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;