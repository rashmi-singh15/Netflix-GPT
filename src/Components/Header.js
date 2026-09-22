import React from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useLocation } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView,  resetGptSearch} from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
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

        dispatch(resetGptSearch());
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      });

    //Unsubscribe when component unmounts
      return () => unsubscribe();
   }, []);

   const handleGptSearchClick = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
   };

   const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
   };


  return (
  <div className="fixed top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
     <img  className="w-40" src={LOGO} alt="logo" />
     {user && location.pathname === "/browse" && (
     <div className="flex p-2">
      {showGptSearch && (
      <select 
      className= "p-2 m-2 bg-gray-900 text-white" 
      onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
      )}
      <button 
        className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" 
        onClick={handleGptSearchClick}
      >
        {showGptSearch ? "Homepage" : "GPT Search"}
      </button>
       <img
          className="w-12 h-12"
          alt="usericon"
          src={user?.photoURL || "https://avatars.githubusercontent.com/u/220914431?s=96&v=4"}/>
        <button 
           onClick={handleSignOut} 
           className="font-bold text-white"
           >
          (Sign Out)
        </button>
     </div>
     )}
   </div>
  );  
};

export default Header;
