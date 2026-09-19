import React from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useLocation } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const location = useLocation();

  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
          navigate("/error");
      });
  };

   useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
           const {uid, email, displayName, photoURL } = user;
           dispatch(
            addUser({
            uid: uid, 
            email: email, 
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      });

    //Unsubscribe when component unmounts
      return () => unsubscribe();
   }, []);

  return (
  <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
     <img  className="w-40" src={LOGO} alt="logo" />
     {user && location.pathname === "/browse" && (
     <div className="flex p-2">
       <img
          className="w-12 h-12"
          alt="usericon"
          src={user?.photoURL || "https://avatars.githubusercontent.com/u/220914431?s=96&v=4"}/>
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
     </div>
     )}
   </div>
  );  
};

export default Header;
