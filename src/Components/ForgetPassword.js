import React from 'react'

function ForgetPassword() {
  return (
    <div>
      <h1>Forget Password</h1>
      <input type="email" placeholder="Enter your email" />
      <input type='text' placeholder='New Password'/>
       <input type='text' placeholder='Confirm New Password'/>
       <button>Submit</button>
    </div>
  )
}

export default ForgetPassword;
