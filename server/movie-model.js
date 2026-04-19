/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

   const movies = {
  
  tt2543164: {
    imdbID: `tt2543164`,
    Title: `Arrival`,
    Released: `2016-11-11`,
    Runtime: 116,
    Genres: [`Drama`, `Mystery`, `Sci-Fi`],
    Directors: [`Denis Villeneuve`],
    Writers: [`Eric Heisserer`, `Ted Chiang`],
    Actors: [`Amy Adams`, `Jeremy Renner`, `Forest Whitaker`],
    Plot: `Linguist Louise Banks leads a team of investigators when gigantic spaceships touch down around the world. As nations teeter on the verge of global war, Banks and her crew must find a way to communicate with the extraterrestrial vi...`,
    Poster: `https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg`,
    Metascore: 81,
    imdbRating: 7.9
  },


  tt1375666: {
    imdbID: `tt1375666`,
    Title: `Inception`,
    Released: `2010-07-16`,
    Runtime: 148,
    Genres: [`Action`, `Adventure`, `Sci-Fi`],
    Directors: [`Christopher Nolan`],
    Writers: [`Christopher Nolan`],
    Actors: [`Leonardo DiCaprio`, `Joseph Gordon-Levitt`, `Elliot Page`],
    Plot: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, but his tragic past may doom the project and his team to disaster.`,
    Poster: `https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg`,
    Metascore: 74,
    imdbRating: 8.8
  },


  tt6710474: {
    imdbID: `tt6710474`,
    Title: `Everything Everywhere All at Once`,
    Released: `2022-04-08`,
    Runtime: 139,
    Genres: [`Action`, `Adventure`, `Comedy`],
    Directors: [`Daniel Kwan`, `Daniel Scheinert`],
    Writers: [`Daniel Kwan`, `Daniel Scheinert`],
    Actors: [`Michelle Yeoh`, `Stephanie Hsu`, `Jamie Lee Curtis`],
    Plot: `A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.`,
    Poster: `https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_SX300.jpg`,
    Metascore: 81,
    imdbRating: 7.7
  }
};

module.exports = {movies}; // Exports the object so server.js can use it