import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='Login'>
        <form className='loginform'>
            <label>Email</label>
            <input type="text" placeholder='Enter the email' />
            <label>Password</label>
            <input type="password" placeholder='Enter your email' />

            <button className='loginRegisterButton'>Login</button>
        </form>
        <span className='register'>don't having the account  <Link to={'/register'} style={{color:'skyblue'}}>create account</Link></span>
    </div>
  )
}

export default Login