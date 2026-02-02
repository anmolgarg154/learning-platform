import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../Action';
import { connect } from 'react-redux';

function Logout({commonData,setLogin}) {
  const [logout, setLogout] = useState("false")
    const nav = useNavigate()
    function doLogout(event){
      if(event.type === 'click'){
        setLogout("true")
      }
        setLogin('N');
        nav('/login')
    }
    useEffect(()=>{setLogin()},[setLogin])
  return (
    <div className='min-h-screen'>
       <button className='bg-green-600 m-4 px-4 py-4 text-2xl font-bold' onClick={doLogout}>Logout</button>
    </div>
  )
}

let connectToStore = (state)=>({commonData:state})
let dispatchToStore = (dispatch)=>({
    setLogin:(value)=>dispatch(setLogin(value))
})
export default connect (connectToStore,dispatchToStore) (Logout);
