import React from "react";
import { Link, Navigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://booksstore-lime.vercel.app/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup succesfully");
          <Link to="/" />;
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("errror" + err.response.data.message);
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md  shadow-lg rounded-xl p-6 relative">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link
            to="/"
            className="absolute right-3 top-3 text-gray-500 hover:text-black"
          >
            ✕
          </Link>
          <h3 className="text-2xl font-bold text-center mb-6">Sign Up</h3>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              {...register("fullname", { required: "name is required" })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button className="w-full sm:w-auto bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition">
              Sign Up
            </button>

            <p className="text-sm">
              Have an account?{" "}
              <button
                className="text-blue-600 underline cursor-pointer "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
            </p>
            <Login />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
