import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-linear-to-br from-gray-950 to-gray-900">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-full max-w-md flex flex-col items-center justify-center gap-8 bg-gray-900 bg-opacity-80 backdrop-blur-sm px-8 py-16 rounded-2xl shadow-2xl border border-gray-800"
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Sign in to your account</p>
        </div>

        <div className="w-full flex flex-col items-center gap-5">
          <input
            className="w-full border border-gray-700 text-base outline-none py-3 px-5 rounded-lg bg-gray-800 bg-opacity-50 text-white placeholder:text-gray-500 focus:border-green-400 focus:bg-gray-800 transition-all duration-200"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full border border-gray-700 text-base outline-none py-3 px-5 rounded-lg bg-gray-800 bg-opacity-50 text-white placeholder:text-gray-500 focus:border-green-400 focus:bg-gray-800 transition-all duration-200"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <small className="text-gray-500 text-xs mt-2">
            Credentials are stored locally
          </small>
        </div>

        <button
          className="w-full bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base font-semibold py-3 px-6 rounded-lg cursor-pointer transition-all duration-200 transform active:scale-95 shadow-lg mt-4"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
