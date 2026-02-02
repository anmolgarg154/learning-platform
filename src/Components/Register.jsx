import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Register() {
  const nav = useNavigate();
  function doRegsiter() {
    let q1 = document.getElementById('q1').value
    let q2 = document.getElementById('q2').value
    let q3 = document.getElementById('q3').value
    let q4 = document.getElementById('q4').value

    if (q1 === "" || q2 === "" || q3 === "" || q4 === "") {
      alert("All fields are required");
      return
    }
    if ( q2.indexOf("@") === -1 || q2.indexOf(".") === -1) {
      alert("Invalid Email !!");
      return
    }
    if(q3.length < 10){
      alert("Invalid Phone Number")
      return
    }

    let obj = { Username: q1, Email: q2, PhoneNumber: q3, Password: q4 };
    console.log(obj);

    axios.post("http://localhost:5000/api/v1/users/register", obj)
      .then((reply) => {
        if (reply.status === 200 || reply.status === 201) {
          alert("Register Successfullly");
          clearAll();
          nav("/login");
        } else {
          alert("User not registered")
        }
      })
      .catch((err)=>{
        console.log("Frontend Error :",err)
      })
  }
   function clearAll()
  {
      document.getElementById("q1").value="";
      document.getElementById("q2").value="";
      document.getElementById("q3").value="";
      document.getElementById("q4").value="";
     
  }
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Blurred Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 blur-3xl scale-110"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Register Card */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="text-sm text-white/70 mt-1">
            Join us and get started
          </p>
        </div>

        {/* Form UI */}
        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Username"
            id='q1'
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />

          <input
            type="email"
            placeholder="Email"
            id='q2'
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />

          <input
            type='text'
            placeholder="Phone Number"
            id='q3'
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />

          <input
            type="password"
            id='q4'
            placeholder="Password"

            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />

          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-white text-indigo-600 font-semibold py-3 hover:bg-white/90 transition"
            onClick={doRegsiter}
          >
            Register
          </button>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-white/70 mt-6">
          Already have an account?
          <Link to="/login">
            <span className="text-white font-medium cursor-pointer hover:underline ml-1">
              Login
            </span>
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register
