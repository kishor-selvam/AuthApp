import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setLoading(false);
      const data = await res.json();
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/sign-in");
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-center p-10 text-3xl font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          autoComplete="off"
          placeholder="Username"
          id="username"
          className="p-3 bg-slate-100 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="p-3 bg-slate-100 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="p-3 bg-slate-100 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="text-white p-3 uppercase hover:opacity-95 disabled:opacity-80 rounded-lg bg-slate-700"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <button className="text-white px-3 uppercase py-3 rounded-lg bg-red-700">
          CONTINUE WITH GOOGLE
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
      <p className="mt-5 text-red-700">{error && "Something went wrong!"}</p>
    </div>
  );
};

export default Signup;
