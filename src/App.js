import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles=[
  "Matrix",
  "Full Metal Jacket",
  "Old Boy",
  "Star Wars"
]

const movieImages=[
  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL._SY445_.jpg",
  "http://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} /> 
        <Movie title={movieTitles[1]} poster={movieImages[1]} /> 
        <Movie title={movieTitles[2]} poster={movieImages[2]} /> 
        <Movie title={movieTitles[3]} poster={movieImages[3]} /> 
      </div>
    )
  }
}

export default App;
