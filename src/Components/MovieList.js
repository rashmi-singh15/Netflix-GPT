// import React from 'react';
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
 
//   return (
//     <div className="px-6">
//       <h1 className="text-3xl py-4 text-white">{title}</h1>
//       <div className="flex overflow-x-auto no-scrollbar"> 
//        <div className="flex">
//          {movies?.map((movies) => (
//            <MovieCard key={movies.id} posterPath={movies.poster_path} />
//            ))}
//       </div>
//      </div> 
//     </div>
//   )
// }

// export default MovieList;

import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-4">
      <h2 className="text-xl md:text-2xl py-4 text-white font-bold">
        {title}
      </h2>

      <div className="flex overflow-x-scroll no-scrollbar">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;