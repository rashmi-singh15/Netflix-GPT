import React from 'react';
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtononClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value, 
        password.current.value 
    )
     .then((userCredential) => {
      const user = userCredential.user;
       updateProfile(user, {
         displayName:name.current.value,
         photoURL: "https://avatars.githubusercontent.com/u/220914431?s=96&v=4",
      })
        .then(() => {
          navigate("/browse");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
      //    const user = userCredential.user;
      //  console.log(user);
      //  navigate("/browse");
     })
     .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     setErrorMessage(errorCode + "-" + errorMessage);
    });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed in 
       const user = userCredential.user;
       console.log(user);
       navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
    });
  }
};
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="w-full h-screen">
      <Header />
    <div className="absolute inset-0 w-full h-full">
        <img
           className="w-full h-full object-cover"
           src="https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"
           alt="logo"
        />
        </div>
        <form onSubmit={(e) => e.preventDefault()} 
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
               ref={name} 
               tpye="text" 
               placeholder="Full Name"
               className="p-4 my-4 w-full bg-gray-700" 
              />
            )}
          <input 
             ref={email}
             tpye="text" 
             placeholder="Email Address"
             className="p-4 my-4 w-full bg-gray-700" 
          />
          <input
             ref={password}
             type="password" 
             placeholder="Password" 
             className="p-4 my-4 w-full bg-gray-700" 
            />
            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button 
            className="p-4 my-6 bg-red-700 w-full rounded-lg" 
            onClick={handleButtononClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm 
             ? "New to Netflix? Sign Up Now" 
             : "Already registered? Sign In Now."}
          </p>
        </form>
    </div>
  );
};

export default Login;
