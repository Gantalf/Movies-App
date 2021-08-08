import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {


  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id)
  }

  render() {
    console.log(this.props)
    return (
      <div className="movie-detail">
        <img
          className='img'
          src={this.props.movies.Poster}
          alt={this.props.movies.Title}
        />
        <div className='movie-detail--text'>
          <li className='title'>Titulo:{this.props.movies.Title}</li>
          <li>Año:{this.props.movies.Year}</li>
          <li>Puntuacion:{this.props.movies.Rated}</li>
          <li>Duracion:{this.props.movies.Runtime}</li>
          <li>Genero:{this.props.movies.Genre}</li>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movieDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: movie => dispatch(getMovieDetail(movie))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);