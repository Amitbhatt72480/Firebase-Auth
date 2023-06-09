import React from 'react'
import { UserAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';


const Account = () => {
  
  const navigate = useNavigate()
  const {user, logout} = UserAuth();
  const handleLogout = async ()=>{
    try {
      await logout()
      navigate("/")
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
	<div className='max-w-[600px] mx-auto my-16 p-4'>
    <h1 className="text-2xl font-bold py-4">Account</h1>
    <p className="">User Email: {user && user.email}</p>
    <button onClick={handleLogout} className="border px-6 py-2 my-4">Log Out</button>
  </div>
  )
}

export default Account