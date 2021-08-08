import APIKEY from "../config";

export function addMovieFavorite(payload) {
  return {
    type: "ADD_MOVIE_FAVORITE",
    payload: payload
  };
}

export function removeMovieFavorite(payload) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: payload
  }
}

export function getMovieDetail(idMovie) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${idMovie}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=` + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}