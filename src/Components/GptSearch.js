// import React from "react";
// import GptMovieSuggestion from "./GptMovieSuggestion";
// import GptSearchBar from "./GptSearchBar";
// import { BG_URL } from "../utils/constants";

// const GptSearch = () => {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">

//       {/* Background */}
//       <div className="fixed inset-0 -z-10">
//         <img
//           src={BG_URL}
//           alt="Netflix Background"
//           className="h-full w-full object-cover"
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         <GptSearchBar />
//         <GptMovieSuggestion />
//       </div>

//     </div>
//   );
// };

// export default GptSearch;

import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen w-full">

      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* GPT Search Content */}
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>

    </div>
  );
};

export default GptSearch;