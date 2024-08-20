"use client";

import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username
        </label>
        <input
          type="text"
          {...register("username", {
            required: { value: "true", message: "Username is required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-600 text-slate-200 w-full"
        />
        {errors.username && (
          <span className="w-full flex justify-end text-xs text-red-800">
            {errors.username.message}
          </span>
        )}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email
        </label>
        <input
          type="email"
          {...register("email", {
            required: { value: "true", message: "Email is required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-600 text-slate-200 w-full"
        />{" "}
        {errors.email && (
          <span className="w-full flex justify-end text-xs text-red-800">
            {errors.email.message}
          </span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: { value: "true", message: "Password is required" },
          })}
          className="p-3 rounded block mb-2 bg-slate-600 text-slate-200 w-full"
        />{" "}
        {errors.password && (
          <span className="w-full flex justify-end text-xs text-red-800">
            {errors.password.message}
          </span>
        )}
        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password
        </label>
        <input
          type="confirmPassword"
          {...register("confirmPassword", {
            required: {
              value: "true",
              message: "Confirm Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-600 text-slate-200 w-full"
        />{" "}
        {errors.confirmPassword && (
          <span className="w-full flex justify-end text-xs text-red-800">
            {errors.confirmPassword.message}
          </span>
        )}
        <button className=" w-full bg-blue-700 text-white p-3 rounded-lg mt-6">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
