import React from "react";
import { useForm } from "react-hook-form";
import { registerApi } from "../../api/api";
import { useDispatch } from "react-redux";
import { addUser, setAccessToken } from "../../state/auth";
import { useNavigate } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await registerApi(data);

      dispatch(addUser(res.data.user));
      dispatch(setAccessToken(res.data.accessToken));

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // Connect this function to your backend Google OAuth route.
  const handleGoogleLogin = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-[#b9cdbb] p-3 sm:p-6 lg:flex lg:items-center lg:justify-center">
      <div className="mx-auto flex min-h-[calc(100vh-24px)] w-full max-w-5xl overflow-hidden rounded-[26px] border border-white/30 bg-[#b9cdbb] shadow-[10px_10px_25px_#9fb3a1,-10px_-10px_25px_#d3e7d5] sm:min-h-[calc(100vh-48px)]">

        {/* Left Panel */}
        <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#315b3c] p-10 text-white lg:flex xl:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-bold">
              N
            </div>
            <span className="text-sm font-semibold tracking-[0.18em]">
              NEXORA
            </span>
          </div>

          <div className="relative z-10 max-w-sm">
            <span className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] tracking-wide text-green-100">
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h1 className="text-3xl font-bold leading-tight xl:text-4xl">
              Build your future.
              <br />
              Start with us.
            </h1>

            <p className="mt-5 max-w-xs text-sm leading-6 text-green-100/80">
              Create your account and enjoy a simple, secure and seamless
              experience. Everything you need starts with one small step.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Quick and easy registration",
                "A secure account experience",
                "Everything in one place",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm">
                    ✓
                  </div>
                  <p className="text-sm text-green-50">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 text-xs text-green-100/60">
            © 2026 NEXORA. Start something great.
          </p>
        </div>

        {/* Register Form */}
        <div className="flex w-full items-center justify-center px-5 py-8 sm:px-10 lg:w-1/2 lg:px-10 xl:px-14">
          <div className="w-full max-w-[350px]">

            {/* Mobile Brand */}
            <div className="mb-6 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#315b3c] text-lg font-bold text-white">
                N
              </div>
              <span className="text-sm font-bold tracking-[0.18em] text-[#315b3c]">
                NEXORA
              </span>
            </div>

            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-[#527b5b]">
                GET STARTED TODAY
              </p>
              <h2 className="text-2xl font-bold text-[#294633]">
                Create account
              </h2>
              <p className="mt-2 text-sm text-[#506b55]">
                Fill in your details to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold text-[#304d38]">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                  className="w-full rounded-xl border border-[#a7bda9]/50 bg-[#b9cdbb] px-3.5 py-3 text-sm text-[#263f2e] shadow-[inset_3px_3px_6px_#9fb3a1,inset_-3px_-3px_6px_#d3e7d5] outline-none placeholder:text-[#6b806e] focus:ring-2 focus:ring-[#527b5b]/30"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-700">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold text-[#304d38]">
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
                      message: "Please enter a valid email",
                    },
                  })}
                  className="w-full rounded-xl border border-[#a7bda9]/50 bg-[#b9cdbb] px-3.5 py-3 text-sm text-[#263f2e] shadow-[inset_3px_3px_6px_#9fb3a1,inset_-3px_-3px_6px_#d3e7d5] outline-none placeholder:text-[#6b806e] focus:ring-2 focus:ring-[#527b5b]/30"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-700">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-2 block text-xs font-semibold text-[#304d38]">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  autoComplete="new-password"
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
                  <p className="mt-1.5 text-xs text-red-700">{errors.password.message}</p>
                )}
                <p className="mt-2 text-[11px] text-[#506b55]">
                  Use at least 8 characters.
                </p>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#315b3c] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#284d33] active:scale-[0.98]"
              >
                Create Account <span>→</span>
              </button>
            </form>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#91aa95]/70" />
              <span className="text-[11px] font-medium text-[#506b55]">
                OR CONTINUE WITH
              </span>
              <div className="h-px flex-1 bg-[#91aa95]/70" />
            </div>

            {/* Google Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#91aa95]/70 bg-[#c4d5c6] px-4 py-3 text-sm font-semibold text-[#304d38] shadow-[3px_3px_7px_#9fb3a1,-3px_-3px_7px_#d3e7d5] transition hover:bg-[#cbdccc] active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.06 13.22l7.98 6.19C12.72 13.72 17.88 9.5 24 9.5Z" transform="translate(0 4)" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.26 5.64c4.24-3.91 6.52-9.67 6.52-17.29Z" />
                <path fill="#FBBC05" d="M10.04 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a24 24 0 0 0 0 21.56l7.98-6.19Z" transform="translate(0 4)" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.26-5.64c-2.01 1.35-4.6 2.15-8.64 2.15-6.12 0-11.28-4.22-13.16-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
              </svg>
              Continue with Google
            </button>

            <p className="mt-6 text-center text-xs text-[#405d46]">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-bold text-[#294b32] underline underline-offset-2 hover:text-[#173722]"
              >
                Login
              </a>
            </p>

            <p className="mt-5 text-center text-[10px] tracking-wider text-[#66806a]">
              SECURE ACCOUNT ACCESS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;