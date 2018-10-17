import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_WORD_REQUEST = 'FETCH_WORD_REQUEST';
export const fetchWordRequest = () => ({
  type: FETCH_WORD_REQUEST
});

export const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS';
export const fetchWordSuccess = word => ({
  type: FETCH_WORD_SUCCESS,
  word
});

export const FETCH_WORD_ERROR = 'FETCH_WORD_ERROR';
export const fetchWordError = error => ({
  type: FETCH_WORD_ERROR,
  error
});

export const SEND_ANSWER = 'SEND_ANSWER';
export const sendAnswerAction = (feedback) => ({
  type: SEND_ANSWER,
  feedback
});

export const fetchWord = () => (dispatch, getState) => {
  dispatch(fetchWordRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/word`, {
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
    .then(word => {
      dispatch(fetchWordSuccess(word));
    })
    .catch(err => {
      dispatch(fetchWordError(err));
    });
};

export const sendAnswer = answer => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/word`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ answer })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(feedback => {
      dispatch(sendAnswerAction(feedback));
    });
};
