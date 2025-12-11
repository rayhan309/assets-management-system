import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-slate-900/40 border border-slate-700/40 shadow-2xl rounded-3xl backdrop-blur-xl p-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-center mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Welcome Back
        </motion.h2>

        <p className="text-center text-slate-400 text-sm mb-10">
          Login to your account to continue
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-300">Email</span>
            </label>
            <br />
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered input-md bg-slate-800/40 border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-200"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered input-md bg-slate-800/40 border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-200"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/, 
                  message: "Must include uppercase, lowercase, number & symbol",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-400 text-sm mt-1">{errors.password.message}</span>
            )}
          </div>

          <button className="btn btn-primary w-full rounded-xl font-semibold tracking-wide text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30">
            Login
          </button>
        </form>

        <div className="text-center mt-5">
          <a href="#" className="link link-hover text-slate-400 text-sm">
            Forgot Password?
          </a>
        </div>

        <div className="divider my-8 text-slate-500">OR</div>

        <button className="btn btn-outline w-full rounded-xl flex items-center gap-3 border-slate-600 hover:bg-slate-800">
          <FcGoogle size={24} /> Continue with Google
        </button>

        <p>Create account? <Link to={'/register'} className={'text-blue-300 hover:underline'}>Please Register</Link></p>
      </motion.div>
    </div>
  );
}
