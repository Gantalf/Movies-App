import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { removeMovieFavorite } from '../../actions/index';

import '../Buscador/Buscador.css';

class ConnectedList extends Component {

  render() {
    return (
      <div className='cont'>
        <h2>Películas Favoritas</h2>
        <ul className='cards__container'>
          {/* Aqui deberias poner tu lista de peliculas! */
            this.props.movies.map((movie) => {
              return (
                <div className='card__item'>
                  <img
                    className="card__item--img"
                    src={movie.poster}
                    alt={movie.title}
                  />
                  <div className="card__item--details">
                    <Link to={`/movie/${movie.id}`}>
                      <li className='card__item--details-name'>{movie.title}</li>
                    </Link>
                    <button className='fav' onClick={() => this.props.removeMovieFavorite(movie)}>X</button>
                  </div>

                </div>

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
