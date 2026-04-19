const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {

  const movieArrary = Object.values(movieModel.movies); // converts the movies object into an array
  res.json(movieArrary);
}
);

app.get('/movies/:imdbID', function (req, res) {

  const requestedID = req.params.imdbID; // Takes the ID from the URL
  const movie = movieModel.movies[requestedID]; // loos into the movies object

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
}
});

app.put('/movies/:imdbID', function (req, res) {

  const requestedID = req.params.imdbID;
  const updatedMovieData = req.body;

  if (movieModel.movies[requestedID]) {
    movieModel.movies[requestedID] = updatedMovieData;
    res.sendStatus(200);
  } else {
    movieModel.movies[requestedID] = updatedMovieData;
    res.status(201).json(movieModel.movies[requestedID]);
  }
  });

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

