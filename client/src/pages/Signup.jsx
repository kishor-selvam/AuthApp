import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-center p-10 text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 bg-slate-100 rounded-lg focus:outline-none"
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          className="p-3 bg-slate-100 rounded-lg focus:outline-none"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="p-3 bg-slate-100 rounded-lg focus:outline-none"
        />
        <button className="text-white p-3 hover:opacity-95 disabled:opacity-80 rounded-lg bg-slate-700">
          SIGN UP
        </button>
        <button className="text-white px-3 py-3 rounded-lg bg-red-700">
          CONTINUE WITH GOOGLE
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
