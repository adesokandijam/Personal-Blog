import './login.css'
import React from "react";
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
    <form className='loginForm'>
        <label>Email</label>
        <input className='loginInput' type="text" placeholder='Enter your email'/>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder='Enter your password'/>
        <button className='loginButton'>LOGIN</button>
    </form>
        <button className='loginRegisterButton'>
          <Link to={"/register"} className="link">REGISTER</Link>
        </button>
    </div>
  )
}
