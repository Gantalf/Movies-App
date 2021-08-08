import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';

import { removeMovieFavorite } from '../../actions/index';

class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */
            this.props.movies.map((movie) => {
              return (
                <>
                  <Link to={`/movie/${movie.id}`}>
                    <li>{movie.title}</li>
                  </Link>
                  <button onClick={() => this.props.removeMovieFavorite(movie)}>X</button>
                </>

              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
