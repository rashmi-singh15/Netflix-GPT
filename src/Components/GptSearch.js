
import React from "react";
import { BG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div className="min-h-screen relative">
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Search bar */}
      <GptSearchBar />

      {/* Movie results */}
      <GptMovieSuggestion />

    </div>
  );
};

export default GptSearch;