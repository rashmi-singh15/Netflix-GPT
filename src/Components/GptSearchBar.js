import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import {
  API_OPTIONS,
  GEMINI_API_KEY,
} from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";
import { GoogleGenAI } from "@google/genai";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector(
    (store) => store.config.lang
  );

  const searchText = useRef(null);

  
  // GEMINI MOVIE RECOMMENDATIONS
  
  const getGeminiMovies = async (query) => {
    try {
      console.log("=================================");
      console.log("GEMINI SEARCH STARTED");
      console.log("API key exists:", !!GEMINI_API_KEY);
      console.log("User query:", query);

      if (!GEMINI_API_KEY) {
        console.error("Gemini API key is missing!");
        return [];
      }

      const ai = new GoogleGenAI({
        apiKey: GEMINI_API_KEY,
      });

      console.log("Calling Gemini API...");

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: `
You are a movie recommendation engine.

The user wants:
${query}

Recommend exactly 5 movies matching the user's request.

Return ONLY the movie titles separated by commas.

Do not use:
- numbering
- bullet points
- explanations
- descriptions
- quotes

Example:
Andaz Apna Apna, Hera Pheri, Padosan, Gol Maal, Chupke Chupke
        `,
      });

      console.log("FULL GEMINI RESPONSE:", response);

      const text = response.text;

      console.log("GEMINI TEXT:", text);

      if (!text) {
        console.error("Gemini returned no text");
        return [];
      }

      const movies = text
        .replace(/\n/g, "")
        .replace(/\*/g, "")
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean)
        .slice(0, 5);

      console.log("FINAL GEMINI MOVIES:", movies);

      return movies;
    } catch (error) {
      console.error("GEMINI ERROR:", error);

       if (error?.status === 503 || error?.code === 503) {
      console.log(
        "Gemini is temporarily busy. Please try again in a few seconds."
      );
    }

      return [];
    }
  };

  
  // SEARCH MOVIE ON TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      console.log("Searching TMDB for:", movie);

      const url =
        "https://api.themoviedb.org/3/search/movie" +
        "?query=" +
        encodeURIComponent(movie) +
        "&include_adult=false" +
        "&language=en-US" +
        "&page=1";

      const data = await fetch(url, API_OPTIONS);

      const json = await data.json();

      console.log(
        "TMDB result:",
        movie,
        json.results
      );

      return json.results || [];
    } catch (error) {
      console.error("TMDB ERROR:", error);
      return [];
    }
  };

 
  // SEARCH BUTTON
  
  const handleGptSearchClick = async () => {
    const query = searchText.current.value;

    if (!query.trim()) {
      return;
    }

    console.log("=================================");
    console.log("SEARCH QUERY:", query);

    // 1. Get movie names from Gemini
    const gptMovies = await getGeminiMovies(query);

    console.log(
      "Gemini Movie Suggestions:",
      gptMovies
    );

    if (!gptMovies.length) {
      console.log("No movies received from Gemini");
      return;
    }

    // 2. Search each movie on TMDB
    const promiseArray = gptMovies.map((movie) =>
      searchMovieTMDB(movie)
    );

    const tmdbResults = await Promise.all(
      promiseArray
    );

    console.log(
      "FINAL TMDB RESULTS:",
      tmdbResults
    );

    // 3. Store results in Redux
    dispatch(
      addGptMoviesResult({
        moviesNames: gptMovies,
        moviesResult: tmdbResults,
      })
    );

    console.log("MOVIES STORED IN REDUX");
    console.log("=================================");
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchClick();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={
            lang[langKey].gptSearchPlaceholder
          }
        />

        <button
          type="submit"
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;