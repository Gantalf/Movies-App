import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';

import { addMovieFavorite, getMovies } from '../../actions/index';


class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title, } = this.state;
    return (
      <div className='cont'>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Busca una Película</h2>
          <div className="main-input-container">
            <input
              type="text"
              id="title"
              autoComplete="off"
              placeholder="ejm: Inception"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button className='submit' type="submit">BUSCAR</button>
          </div>
        </form>
        <ul className='cards__container'>
          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */
            this.props.movies.map(movie => {
              return (
                <div className='card__item'>
                  <img
                    className="card__item--img"
                    src={movie.Poster}
                  />
                  <div className="card__item--details">
                    <Link to={`/movie/${movie.imdbID}`}>
                      <li className='card__item--details-name'>{movie.Title}</li>
                    </Link>

                    <button className='fav' onClick={() => this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID
                    })}>FAV</button>
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
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

