import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import useFetch from '../useFetch';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telnum, setTelnum] = useState('');
  const [pass, setPass] = useState('')
  const [DoB, setDoB] = useState('')
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
            <label >Full Name</label>
            <input className='block' 
              type="text" 
              name="firstname" 
              required
              placeholder="Your name.." 
              onChange={(e) => setName(e.target.value)}
              />
          </div>

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

          <div className='form1'>
            <div className='form2'>
              <label>number</label>
              <input className='block' 
                type="tel" 
                name="number" 
                placeholder="024-524-9961" 
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
                required
                onChange={(e) => setTelnum(e.target.value)}
                />
            </div>
            <div className='form3'>
              <label>Date of birth</label>
              <input className='block' 
                type="date" 
                name="DOB" 
                required
                placeholder="DOB.."
                onChange={(e) => setDoB(e.target.value)}
                />
            </div>
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
          <div className='form'>
            <label>Confirm Password</label>
            <input className='block' 
              type="password" 
              name="password" 
              required
              placeholder="Confirm your password.."
              onChange={(e) => setPass(e.target.value)}
              />
          </div>

          <input className='subStyle' type='submit' value= 'SignUp' />
        </form>

    </div>

  )
}

export default SignUp