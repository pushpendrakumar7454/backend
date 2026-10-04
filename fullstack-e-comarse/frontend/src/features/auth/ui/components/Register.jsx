
import React from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../api/useApi";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setAccessToken } from "../../state/authSlice";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
  const dispatch=useDispatch()
 

    const onSubmit = async(data) => {
        try {
           const res=await registerUser(data)
           dispatch(setAccessToken(res.accessToken));
           dispatch(addUser(res.data.user));
           
        
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">

                <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    Register your account
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Name cannot exceed 50 characters"
                                }
                            })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500"
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

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
                                    message: "Email must be at least 10 characters"
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Email cannot exceed 100 characters"
                                }
                            })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500"
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mobile Number
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your mobile number"
                            {...register("number", {
                                required: "Mobile number is required",
                                minLength: {
                                    value: 10,
                                    message: "Mobile number must be 10 digits"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Mobile number must be 10 digits"
                                }
                            })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500"
                        />

                        {errors.number && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.number.message}
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
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500"
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Role */}
                  

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2.5 transition"
                    >
                        Register
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Register;

