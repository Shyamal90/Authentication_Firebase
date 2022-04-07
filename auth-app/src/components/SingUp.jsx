import React,{useState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase'
import {Link} from 'react-router-dom'
import SignIn from './SignIn';


function SingUp() {
    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");
    const [userConfirmPassword,setUserConfirmPassword] = useState("");
   


    async function handleSubmit(){
        if(userPassword === userConfirmPassword){
            try {
                let userDetails = await createUserWithEmailAndPassword(auth,userEmail,userPassword)
                console.log(userDetails)
            } catch (error) {
                console.log(error.message);
            } 
        }else{
            alert("Invalid Password!!!")
        }
        
    }

  return (
    <>
      <div className="sign_up_container">
          <div className="heading">
              <h1>Sign Up</h1>
          </div>
          <div className="form_body">
              <div className="email_field">
                  <p>Email</p>
                  <input type="email"  id="email" value={userEmail} onChange={(event)=>setUserEmail(event.target.value)}/>
              </div>
              <div className="password_field">
                  <p>Password</p>
                  <input type="password"  id="password" val={userPassword} onChange={(event)=>setUserPassword(event.target.value)}/>
              </div>
              <div className="cpassword_field">
                  <p>Password</p>
                  <input type="password"  id="cpassword" val={userConfirmPassword} onChange={(event)=>setUserConfirmPassword(event.target.value)}/>
              </div>
              
              <div className="sign_up_btn">
                  <button onClick={()=>handleSubmit()}>Sign Up</button>
              </div>
          </div>
      </div>
      <div className="login_page">
          <p>Already have an account ? <span>
              <Link to={"/login"}>Log In</Link>
              </span></p>
      </div>
    </>
  )
}

export default SingUp
