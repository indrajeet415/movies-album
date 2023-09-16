import React, { Component } from "react";
import MovieCard from "../MoviesCard/MoviesCard";
import './MoviesListStyle.css';
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          this.setState({ movies: data.Search });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.Id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
