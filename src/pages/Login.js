import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../useFetch'

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')

  return (
    <div className='App-header'>
      <div className='header'>
        <h1>FINGERPRINT</h1>
        <div className='Log-Sign'>
            <Link className='edit' to="/">SIGNUP</Link>
            <Link className='edit1' to= "/Login">LOGIN</Link>
        </div>
      </div>
        <form className='form'>
          <div className='form'>
            <label>E-mail</label>
            <input 
              className='block' 
              type="email" 
              name="email"
              required
              placeholder="Your email.." 
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          <div className='form'>
            <label>Password</label>
            <input className='block' 
              type="password" 
              name="password"               
              required
              placeholder="Your password.." 
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        </form>
    </div>
  )
}

export default Login 