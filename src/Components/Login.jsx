import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setLogin } from '../Action';

import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const nav = useNavigate();
 

  async function doLogin() {
    const s1 = document.getElementById("Lt1").value;
    const s2 = document.getElementById("Lt2").value;

    if(s1.value == "" && s2.value == ""){
      alert("Both fields are required")
    }

    try {
      const reply = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        { Email: s1, Password: s2 },
        { withCredentials: true } // 🔥 IMPORTANT
      );

       if(s1.value == "" && s2.value == ""){
      alert("Both fields are required")
    }
      if (reply.status === 200) {
        dispatch(setLogin('Y'));   // ✅ THIS UPDATES REDUX
        alert("Login successfully");
        nav("/");
      }
    } catch (err) {
      alert("Incorrect credentials");
    }
  }


  
  
 return (
  <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
    
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 blur-3xl scale-110"></div>
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Main Card */}
    <div className="relative z-10 w-[95%] max-w-5xl rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE – Welcome Text */}
        <div className="hidden md:flex flex-col justify-center items-center text-white p-10">
          <h1 className="text-4xl font-bold mb-4">
            Welcome Back 👋
          </h1>
          <p className="text-white/80 text-lg text-center max-w-sm">
            Login to access your dashboard and continue your journey with us.
          </p>
        </div>

        {/* RIGHT SIDE – Login Box */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-6 md:hidden">
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-sm text-white/70 mt-1">Login to your account</p>
          </div>

          <div className="flex flex-col gap-4">
            <input
              id="Lt1"
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none"
            />

            <input
              id="Lt2"
              type="password"
              placeholder="Password"
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none"
            />

            <div className="flex items-center justify-between text-sm text-white/70">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-white" />
                Remember me
              </label>
              <span className="cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            <button
              type="button"
              className="mt-2 w-full rounded-lg bg-white text-green-600 font-semibold py-3 hover:bg-white/90 transition"
              onClick={doLogin}
            >
              Login
            </button>
          </div>

          <p className="text-center text-sm text-white/70 mt-6">
            Don't have an account?
            <Link to="/register">
              <span className="text-white font-medium cursor-pointer hover:underline ml-1">
                Register
              </span>
            </Link>
          </p>
        </div>

      </div>
    </div>
  </div>
);

}

export default Login;
