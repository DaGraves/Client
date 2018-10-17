import { API_BASE_URL } from './config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE';
export const fetchDog = () => dispatch => {
  return fetch(`${API_BASE_URL}/dog`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_DOG_SUCCESS,
        data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_DOG_FAILURE,
        err
      })
    );
};

export const deleteDog = () => dispatch => {
  return fetch(`${API_BASE_URL}/dog`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(dispatch(fetchDog()))
    .catch(err =>
      dispatch({
        type: FETCH_DOG_FAILURE,
        err
      })
    );
};

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const FETCH_CAT_FAILURE = 'FETCH_CAT_FAILURE';
export const fetchCat = () => dispatch => {
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CAT_SUCCESS,
        data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_CAT_FAILURE,
        err
      })
    );
};

export const deleteCat = () => dispatch => {
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(dispatch(fetchCat()))
    .catch(err =>
      dispatch({
        type: FETCH_CAT_FAILURE,
        err
      })
    );
};
