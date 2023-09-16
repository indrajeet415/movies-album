import React, { Component } from "react";
import './MoviesCardStyle.css';


class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseOver = () => {
    this.setState({ isHovered: true });
  };

  handleMouseOut = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { movie } = this.props;
    return (
      <div
        className="movie-card"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <img src={movie.Poster} alt={movie.Title} />
        {this.state.isHovered && (
          <div className="movie-title">{movie.Title}</div>
        )}
      </div>
    );
  }
}

export default MovieCard;
