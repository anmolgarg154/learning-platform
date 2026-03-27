import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../Action';
import { connect } from 'react-redux';

function Logout({ setLogin }) {
  const nav = useNavigate();

  function doLogout() {
    // 🔥 REMOVE TOKEN (MAIN FIX)
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Optional: clear all storage
    // localStorage.clear();

    // Update Redux
    setLogin('N');

    // Redirect
    nav('/login');
  }

  return (
    <div className='min-h-screen'>
      <button
        className='bg-green-600 m-4 px-4 py-4 text-2xl font-bold'
        onClick={doLogout}
      >
        Logout
      </button>
    </div>
  );
}

let connectToStore = (state) => ({ commonData: state });

let dispatchToStore = (dispatch) => ({
  setLogin: (value) => dispatch(setLogin(value))
});

export default connect(connectToStore, dispatchToStore)(Logout);