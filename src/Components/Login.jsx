import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setLogin } from '../Action';

import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const nav = useNavigate();
 
  const [email, setEmail]= useState("");
  const [password , setPassword] = useState("");
  const [loading , setLoading] = useState(false)

 const doLogin = async()=>{
  if(!email && !password){
    alert("both fields are required");
    return;
  }

  try {
    setLoading(true);
    const reply = await axios.post("http://localhost:5000/api/v1/users/login",{
          Email: email,
          Password: password,
        },
        { withCredentials: true });

        console.log("login", reply.data)

        const token = reply.data?.data?.accessToken;
        if(token){
          localStorage.setItem("token",token)
          localStorage.setItem("user",reply?.data?.data?.user)

          dispatch(setLogin("Y"));
          alert("login successfully");
          nav("/")
        }else {
        alert("Token not received");
      }
    
  } catch (error) {
     console.error(error);
      alert("Invalid email or password");
  } finally {
       setLoading(false)
  }
 }
 return (
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white shadow-lg rounded-xl p-6">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Button */}
        <button
          onClick={doLogin}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );

}

export default Login;
