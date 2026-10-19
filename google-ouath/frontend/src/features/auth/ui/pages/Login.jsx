
import React from "react";
import { useForm } from "react-hook-form";
import { loginAPi } from "../../api/api";
import { addUser, setAccessToken } from "../../state/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await loginAPi(data);

      dispatch(addUser(res.data.user));
      dispatch(setAccessToken(res.data.accessToken));

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  // Google Login
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#b9cdbb] px-4 py-8 font-sans">
      <div className="w-full max-w-[350px]">

        {/* Heading */}
        <div className="mb-5 text-center">
          <h1 className="text-xl font-bold tracking-wide text-[#294633]">
            Welcome Back
          </h1>

          <p className="mt-1 text-xs text-[#4d6853]">
            Login to access your account
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-[24px] border border-white/30 bg-[#b9cdbb] p-6 shadow-[8px_8px_18px_#9fb3a1,-8px_-8px_18px_#d3e7d5]">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold text-[#304d38]"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full rounded-xl border border-[#a7bda9]/50 bg-[#b9cdbb] px-3.5 py-3 text-sm text-[#263f2e] shadow-[inset_3px_3px_6px_#9fb3a1,inset_-3px_-3px_6px_#d3e7d5] outline-none placeholder:text-[#6b806e] focus:ring-2 focus:ring-[#527b5b]/30"
              />

              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-700">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-semibold text-[#304d38]"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="w-full rounded-xl border border-[#a7bda9]/50 bg-[#b9cdbb] px-3.5 py-3 text-sm text-[#263f2e] shadow-[inset_3px_3px_6px_#9fb3a1,inset_-3px_-3px_6px_#d3e7d5] outline-none placeholder:text-[#6b806e] focus:ring-2 focus:ring-[#527b5b]/30"
              />

              {errors.password && (
                <p className="mt-1.5 text-xs font-medium text-red-700">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a
                href="/forgot-password"
                className="text-xs font-medium text-[#355a3d] transition hover:text-[#203c28]"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#315b3c] py-3 text-sm font-semibold text-white shadow-[0_4px_10px_rgba(39,76,48,0.20)] transition hover:bg-[#284d33] active:scale-[0.98]"
            >
              Login <span>→</span>
            </button>

          </form>

          {/* OR Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#91aa95]/60"></div>
            <span className="text-xs font-medium text-[#506b55]">
              OR
            </span>
            <div className="h-px flex-1 bg-[#91aa95]/60"></div>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#91aa95]/60 bg-[#b9cdbb] py-3 text-sm font-semibold text-[#294633] shadow-[3px_3px_7px_#9fb3a1,-3px_-3px_7px_#d3e7d5] transition hover:bg-[#c4d5c6] active:scale-[0.98]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.01 13.22l7.98 6.19C12 13.72 17.57 9.5 24 9.5z"
                transform="translate(0 4)"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 38.02 46.98 31.86 46.98 24.55z"
              />
              <path
                fill="#FBBC05"
                d="M9.99 28.59A14.4 14.4 0 0 1 9.2 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.58 10.78l7.41-6.19z"
                transform="translate(1 0)"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.45-4.89 2.3-8.18 2.3-6.43 0-11.9-4.22-13.87-9.91l-7.98 6.19C6.65 42.62 14.76 48 24 48z"
                transform="translate(0 -2)"
              />
            </svg>

            Continue with Google
          </button>

          {/* Secure Access */}
          <div className="mt-5 border-t border-[#91aa95]/50 pt-4 text-center">
            <p className="text-[10px] font-medium tracking-wider text-[#506b55]">
              SECURE ACCOUNT ACCESS
            </p>
          </div>
        </div>

        {/* Register Link */}
        <p className="mt-5 text-center text-xs text-[#405d46]">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-bold text-[#294b32] underline underline-offset-2 hover:text-[#173722]"
          >
            Create Account
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;