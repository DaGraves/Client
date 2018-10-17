import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROGRESS_REQUEST = 'FETCH_PROGRESS_REQUEST';
export const fetchProgressRequest = () => ({
  type: FETCH_PROGRESS_REQUEST
});

export const FETCH_PROGRESS_SUCCESS = 'FETCH_PROGRESS_SUCCESS';
export const fetchProgressSuccess = progress => ({
  type: FETCH_PROGRESS_SUCCESS,
  progress
});

export const FETCH_PROGRESS_ERROR = 'FETCH_PROGRESS_ERROR';
export const fetchProgressError = error => ({
  type: FETCH_PROGRESS_ERROR,
  error
});

export const fetchProgress = () => (dispatch, getState) => {
  dispatch(fetchProgressRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users/progress`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(progress => {
      dispatch(fetchProgressSuccess(progress));
    })
    .catch(err => {
      dispatch(fetchProgressError(err));
    });
};

export const reset = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch (`${API_BASE_URL}/users/reset`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res => normalizeResponseErrors(res))
  .then(() => dispatch(fetchProgress()))
  .catch(err => console.log(err))
}



export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {reason, message, location} = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};
