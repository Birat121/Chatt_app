import React, { useState } from "react";
import GenderCheckbox from "../component/GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" 
         >
      <div className="backdrop-blur-sm bg-white/30 border border-white/20 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-500 mb-6">
          Signup to
          <span className="text-blue-500"> Chat Application</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text text-gray-600 font-semibold">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 text-black bg-white/40 border-white/50 placeholder-gray-500"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text text-gray-600 font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full input input-bordered h-10 text-black bg-white/40 border-white/50 placeholder-gray-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text text-gray-600 font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-black bg-white/40 border-white/50 placeholder-gray-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text text-gray-600 font-semibold">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 text-black bg-white/40 border-white/50 placeholder-gray-500"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={formData.gender}
          />

          <Link
            to={"/login"}
            className="text-sm text-gray-700 hover:underline hover:text-blue-700 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-4 bg-blue-500 font-bold text-white hover:bg-blue-600 transition duration-300"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
