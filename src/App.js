import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  state = {};

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies:[
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
          },
          {
            title:"Mr.SunShine",
            poster:"https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2sNk/image/GSp4IeruRwm3qKN2E2jmsEz8v-Y.jpg"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render(){
    return(
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;