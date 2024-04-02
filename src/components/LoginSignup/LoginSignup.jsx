import React, { useState } from 'react'
import './LoginSignup.css'

import person from '../../assets/person.png'
import email from '../../assets/email.png'
import password from '../../assets/password.png'


function LoginSignup() {

    const [action,setAction] = useState("Sign Up")


    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Log in"?<div></div>:<div className='input'>
                    <img src={person} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
               
                <div className='input'>
                    <img src={email} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className='input'>
                    <img src={password} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password'> Lost Password? <span>Click Here</span></div>}
            
            <div className='submit-container'>
                <div className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
            </div>

        </div>
    )
}
export default LoginSignup