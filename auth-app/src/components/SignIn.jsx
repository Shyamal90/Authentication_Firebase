import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import {Link} from 'react-router-dom'

function SignIn() {

    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");

    async function handleLogin(){
        try {
            let user = await signInWithEmailAndPassword(auth,userEmail,userPassword);
            // alert("Log in successfully!!!")
            
        } catch (error) {
            alert(error);
        }
    }

  return (
    <>
      <h1>Sign In</h1>
      <div className="signinContainer">

          <div className="emailField">
              <p>Email</p>
              <input type="email"    id='email'    value={userEmail}    onChange={(event)=>setUserEmail(event.target.value)}/>
          </div>

          <div className="passwordField">
              <p>Password</p>
              <input type="password" id='password' value={userPassword} onChange={(event)=>setUserPassword(event.target.value)}/>
          </div>
          
         
          <button onClick={()=>handleLogin()}>
              <Link to="/profile">Log in</Link>
          </button>
      </div>
    </>
  )
}

export default SignIn
