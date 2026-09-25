export const LOGO = 
    "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAdEhm1UzVexHjKqFOP9W6E2UVtkWFvL-vdxIEbTU81rsqNuPmDDy_dQvmQ85ath49JBruVV4aGQA3gY2Dl5SiqFf-AEwPAZBTNkW8FMxGXpDN2mHrf8KlRRiddj1P422ZW1eZkZNWLTd.svg"; 

export const USER_AVATAR = 
    "https://occ-0-4079-3647.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABWdoQDrgD7cokEYrF-FVdgfoil5wiBMg6j3GeUjYY_av6C64opFSXOsJ5U8EF02G6SB6b4zUw4MSG6EtpQu8gUBg1Y5Bgs4.png?r=229";


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json', 
       Authorization: 
          "Bearer" + process.env.REACT_APP_TMDB_KEY,
    },
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";


export const BG_URL =
       "https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];

export const GEMINI_API_KEY =
  process.env.REACT_APP_GEMINI_API_KEY;