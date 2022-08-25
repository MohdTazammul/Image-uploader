import React from 'react'
import "./style.css";
import {signInWithGoogle} from "../../firebase/firebase"
function Register() {
  return (
    <div className='g-sign-in-button' onClick={signInWithGoogle}>
        <div className='content-wrapper'>
            <div className='logo-wrapper'>  
                <img src='https://developers.google.com/identity/images/g-logo.png' />
            </div>  
            <span className='text-container'> 
                <span>Sign in with Google</span>
            </span>
        </div>  
    </div>
  )
}

export default Register
