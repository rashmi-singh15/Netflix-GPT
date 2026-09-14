import React from 'react';
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input 
               tpye="text" 
               placeholder="Full Name"
               className="p-4 my-4 w-full bg-gray-700" 
              />
            )}
          <input 
             tpye="text" 
             placeholder="Email Address"
             className="p-4 my-4 w-full bg-gray-700" 
          />
          <input
             type="password" 
             placeholder="Password" 
             className="p-4 my-4 w-full bg-gray-700" 
            />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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
