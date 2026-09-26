// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addNowPlayingMovies } from "../utils/moviesSlice";


// const useNowPlayingMovies = () => {
//     //Fetch Data From TMDB API and update store
//   const dispatch = useDispatch();

//     const nowPlayingMovies = useSelector(
//       (store) => store.movies.nowPlayingMovies
//     );
   
//     const getNowPlayingMovies = async () => {
//       const data = await fetch(
//         'https://api.themoviedb.org/3/movie/now_playing?page=1', 
//         API_OPTIONS
//       );
//       const json = await data.json();
    
//       dispatch(addNowPlayingMovies(json.results));
//     };

//     useEffect(() => {
//       !nowPlayingMovies && getNowPlayingMovies();
//     }, [])
// };

// export default useNowPlayingMovies;



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );

      console.log("TMDB Status:", data.status);

      if (!data.ok) {
        throw new Error(`TMDB API Error: ${data.status}`);
      }

      const json = await data.json();

      console.log("Now Playing Movies:", json.results);

      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies]);

};

export default useNowPlayingMovies;