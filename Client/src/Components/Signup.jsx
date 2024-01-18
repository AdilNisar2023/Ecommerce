import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from '../styles/styles';
import { Link } from 'react-router-dom';
import { SignupPage } from '../Routes';

const Signup=()=> {
    const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setpassword]=useState("");
  const [visible,setVisible]=useState(false);
  return (
    <div className='min-h-screen bg-gray-50 flex
     flex-col justify-center py-12 sm:px-6 lg:px-8'>
    <div className='sm:mx-auto sm-w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Register as a New User
        </h2>
</div>


     <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'></div>
     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form className='space-y-6'>


      <div>
          <label  htmlFor="Name"
          className='block text-sm font-medium text-gray-700'>
           Full Name
          </label>
          <div className='mt-1'>
          <input className='appearance-none block w-full px-3 py-2 border-gray-300
          rounded-md shadow-sm' 
          type="name"
          name="name"
          required
          placeholder='name'
          autoComplete='name'
          value={email}
          onChange={(e)=>setName(e.target.value)}
          />
          
        </div>
        </div>



        <div>
          <label  htmlFor="email"
          className='block text-sm font-medium text-gray-700'>
            Email Address
          </label>
          <div className='mt-1'>
          <input className='appearance-none block w-full px-3 py-2 border-gray-300
          rounded-md shadow-sm' 
          type="email"
          name="eamil"
          required
          placeholder='Email'
          autoComplete='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          
        </div>
        </div>
        <div>
          <label  htmlFor="password"
          className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <div className='mt-1 relative'> 
          <input className='appearance-none block w-full px-3 py-2 border-gray-300
          rounded-md shadow-sm' 
          type={visible ? "text":"password"}
          name="password"
          required
          placeholder='password'
          autoComplete='current-password'
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          />

          { visible ? (
            <AiOutlineEye className='absolute right-2 top-2
             cursor-pointer' size={25}
             onClick={()=>setVisible(false)}
            />
          ):(
            <AiOutlineEyeInvisible className='absolute right-2 top-2
             cursor-pointer' size={25}
             onClick={()=>setVisible(true)}
             />
          )
          }
          
          </div>
        </div>
        
        <button type='submit' className='group relative
        w-full h-[40px] flex justify-center py-2 px-4
        border border-transparent text-sm font-medium
        rounded-md text-white bg-blue-600
        hover:bg-blue-700'>
          Submit
        </button>
        <div className={`${styles.normalFlex}w-full`}>
          <h4>Already have an Account?</h4>
          <Link to="/login" className="text-blue-600 pl-2">
          Login
          </Link>
        </div>
      </form>
     </div>
    </div>
    
  )
}

export default Signup