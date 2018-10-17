import * as actions from '../actions/auth';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === actions.SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === actions.CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    });
  } else if (action.type === actions.AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === actions.AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    });
  } else if (action.type === actions.AUTH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
}
