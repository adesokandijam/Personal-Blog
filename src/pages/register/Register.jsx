import './register.css'
import React from "react";
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
    <form className='registerForm'>
    <label>Username</label>
        <input className='registerInput' type="text" placeholder='Enter your usernmae'/>
        <label>Email</label>
        <input className='registerInput' type="text" placeholder='Enter your email'/>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder='Enter your password'/>
        <button className='registerButton'>REGISTER</button>
    </form>
        <button className='registerLoginButton'>
          <Link to={"/login"} className="link">LOGIN</Link>
          </button>
    </div>
  )
}
