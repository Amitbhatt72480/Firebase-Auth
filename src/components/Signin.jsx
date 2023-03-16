import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'

const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const {signin} = UserAuth();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError("")
    try {
      await signin(email, password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message);
    }
  }


  return (
    <div className='mx-auto my-16 p-5 shadow-xl rounded-lg w-[60%]'>
    <div>
      <h1 className="text-2xl font-bold py-2 mx-auto">
        Sign in to your account
      </h1>
      <p className="py-2 text-sm">
          New here ? <Link to="/signup" className='text-blue-500 hover:text-blue-700'>Sign Up.</Link> 
      </p>
    </div>
    <form className='' onSubmit={handleSubmit}>
      <div className="flex flex-col py-2">
        <label  className="py-2 font-medium ">Email Address</label>
        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter your email' className="border-2 py-2 px-3 " />
      </div>
      <div className="flex flex-col py-2">
        <label  className="py-2 font-medium ">Password</label>
        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter your password' className="border-2 py-2 px-3 " />
      </div>
      <button className="bg-blue-500 px-4 mt-5 py-2 text-white rounded-md">Sign Up</button>
    </form>
  </div>
  )
}

export default Signin