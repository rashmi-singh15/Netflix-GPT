
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6 py-4">
      <h2 className="text-lg md:text-3xl py-4 text-white">
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