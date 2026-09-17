import React from 'react';
import { useSelector } from "react-redux";
import { signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
   const location = useLocation();

  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
          navigate("/error");
      });
  };
  return (
  <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
     <img 
        className="w-40"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAdEhm1UzVexHjKqFOP9W6E2UVtkWFvL-vdxIEbTU81rsqNuPmDDy_dQvmQ85ath49JBruVV4aGQA3gY2Dl5SiqFf-AEwPAZBTNkW8FMxGXpDN2mHrf8KlRRiddj1P422ZW1eZkZNWLTd.svg"
        alt="logo"
     />
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
