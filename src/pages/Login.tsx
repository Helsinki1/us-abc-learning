import React from 'react'
import {auth, provider} from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface Props{
  setIsAuth: (bool: boolean) => void;
}

function Login( {setIsAuth}:Props ) { 

  const signInWithGoogle = () => { // no argument function
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
    });
  };

  return (
    <div className="loginPage">
      <p> Sign In with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login