import React, { useState } from 'react'
import {auth} from "../firebase"
import {onAuthStateChanged,signOut} from 'firebase/auth'
import {Link} from 'react-router-dom'

function Profile() {
    let [currentUser,setCurrentUser] = useState({});

    onAuthStateChanged(auth,(currUser)=>{
        setCurrentUser(currUser);
    })

    console.log("current ",currentUser)


    const handleLogOut = () =>{
        signOut(auth);

    }
  return (
    <>
      <div className="profile_container">
          <p>Welcome {currentUser.email}</p>
          <button onClick={()=>handleLogOut()}>
              <Link to="/login">Log out</Link>
          </button>
      </div>
    </>
  )
}

export default Profile
