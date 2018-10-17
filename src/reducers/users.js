import * as actions from '../actions/users';

const initialState = {
  loading: false,
  error: null,
  progress: []
};

export default (state = initialState, action) => {

  if (action.type === actions.FETCH_PROGRESS_REQUEST) {
    return Object.assign({}, state, { loading: true });
  }

  else if (action.type === actions.FETCH_PROGRESS_SUCCESS) {
    return Object.assign({}, state, { progress: [...action.progress.questions], error: null, loading: false });
  }

  else if (action.type === actions.FETCH_PROGRESS_ERROR) {
    return Object.assign({}, state, { error: action.error, loading: false });
  }

  else {
    return state;
  }
};