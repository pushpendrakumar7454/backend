
import React, { useContext, useState } from "react";
import { authContext, useAuth } from "../context/authContext";
import useApi, { apiInstance } from "../config/apiInstance";
import { useNavigate } from "react-router";

const Register = () => {
  

 const{setaccessToken,setUser}= useAuth()
const api= useApi()
 const navigate=useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({
    name:"",
    email:"",
    password:""
  })

   const handleChange=(e)=>{
    setFormValue((prev)=>({...prev,[e.target.name]:e.target.value}))
   }

  const handleSubmit=async(e)=>{
    e.preventDefault()
     const res=await api.post("/register",formValue)
     console.log(res)
     setaccessToken(res.data.accessToken)
     setUser(res.data.data.user)
     navigate("/profile")
  }


  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Create Account
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Create your account to get started
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formValue.name}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formValue.email}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  value={formValue.password}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Password should be at least 6 characters.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

          {/* Login */}
          <div className="mt-7 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-slate-900 hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-slate-500">
          By creating an account, you agree to our terms and privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Register;
