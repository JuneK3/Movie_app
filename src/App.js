import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies=[
  {
    title:"Matrix",
    poster:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title:"Full Metal Jacket",
    poster:"https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL._SY445_.jpg"
  },
  {
    title:"Old Boy",
    poster:"http://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg"
  },
  {
    title:"Star Wars",
    poster:"https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
       {movies.map(movie => {
         return <Movie title={movie.title} poster={movie.poster} />
       })}
      </div>
    )
  }
}

export default App;
