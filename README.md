# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Login form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement sign In user Api
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- Bugfix: Sign up user displayName and profile picture update
- Bugfix: if teh user is not logged in Redirect /browse to Login  Page and vice-versa
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access taken
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailor Video Data
- Embedded the Youtube video and make it autoplay and mute 
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App


# Features 
- Login/Sign Up
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - MovieSuggestions
             - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions



    rafce fullform : react arrow function component export 






    // import React from 'react';
// import { useState, useRef } from "react";
// import Header from "./Header";
// import { checkValidData } from '../utils/validate';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
// import { addUser } from "../utils/userSlice";
// import { useDispatch } from "react-redux";


// const Login = () => {
//   const [isSignInForm, setIsSignInForm] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const name = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);

//   const handleButtononClick = () => {
//     const message = checkValidData(email.current.value, password.current.value);
//     setErrorMessage(message);
//     if(message) return;
    

//     if(!isSignInForm) {
//       // Sign Up Logic
//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value, 
//         password.current.value 
//     )
//      .then((userCredential) => {
//       const user = userCredential.user;
//        updateProfile(user, {
//          displayName:name.current.value,
//          photoURL: "https://avatars.githubusercontent.com/u/220914431?s=96&v=4",
//       })
//         .then(() => {
//            const {uid, email, displayName, photoURL } = user;
//                      dispatch(
//                       addUser({
//                       uid: uid, 
//                       email: email, 
//                       displayName: displayName,
//                       photoURL: photoURL,
//                     })
//                   );
//         })
//       .catch((error) => {
//         setErrorMessage(error.message);
//       });
//     })
//      .catch((error) => {
//      const errorCode = error.code;
//      const errorMessage = error.message;
//      setErrorMessage(errorCode + "-" + errorMessage);
//     });
//     } else {
//       //Sign In Logic
//       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
//       .then((userCredential) => {
//     // Signed in 
//        const user = userCredential.user;
       
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setErrorMessage(errorCode + "-" + errorMessage);
//     });
//   }
// };
  
//   const toggleSignInForm = () => {
//     setIsSignInForm(!isSignInForm);
//   };
//   return (
//     <div className="w-full h-screen">
//       <Header />
//     <div className="absolute inset-0 w-full h-full">
//         <img
//            className="w-full h-full object-cover"
//            src="https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"
//            alt="logo"
//         />
//         </div>
//         <form onSubmit={(e) => e.preventDefault()} 
//         className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
//           <h1 className="font-bold text-3xl py-4">
//             {isSignInForm ? "Sign In" : "Sign Up"}
//           </h1>
//           {!isSignInForm && (
//             <input
//                ref={name} 
//                tpye="text" 
//                placeholder="Full Name"
//                className="p-4 my-4 w-full bg-gray-700" 
//               />
//             )}
//           <input 
//              ref={email}
//              tpye="text" 
//              placeholder="Email Address"
//              className="p-4 my-4 w-full bg-gray-700" 
//           />
//           <input
//              ref={password}
//              type="password" 
//              placeholder="Password" 
//              className="p-4 my-4 w-full bg-gray-700" 
//             />
//             <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
//           <button 
//             className="p-4 my-6 bg-red-700 w-full rounded-lg" 
//             onClick={handleButtononClick}>
//             {isSignInForm ? "Sign In" : "Sign Up"}
//           </button>
//           <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
//             {isSignInForm 
//              ? "New to Netflix? Sign Up Now" 
//              : "Already registered? Sign In Now."}
//           </p>
//         </form>
//     </div>
//   );
// };

// export default Login;




        'https://api.themoviedb.org/3/movie/top_rated?&page=1', 
