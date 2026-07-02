import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const API = import.meta.env.VITE_API_URL;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${API}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("login sucessfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("error" + err.response.data.message);
          setTimeout(() => {}, 1000);
        }
      });
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-full max-w-md p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Close button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </Link>

          <h3 className="text-2xl font-bold text-center mb-6">Login</h3>

          {/* Email */}
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

          {/* Password */}
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

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button className="w-full sm:w-auto bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition">
              Login
            </button>

            <p className="text-sm">
              Not registered?{" "}
              <Link to="/signup" className="text-blue-600 underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
