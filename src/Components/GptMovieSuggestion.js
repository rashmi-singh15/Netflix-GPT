import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector(
    (store) => store.gpt
  );

  if (!movieNames || !movieResults) return null;

  return (
    <div className="p-4 m-4 bg-black/60 text-white rounded-lg">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;

 