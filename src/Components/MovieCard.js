import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4 flex-shrink-0">
      <img
        className="w-40 h-60 object-cover rounded-lg"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;