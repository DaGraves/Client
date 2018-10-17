import * as actions from '../actions/words';

const initialState = {
  loading: false,
  error: null,
  word: null,
  feedback: null
};

export default (state = initialState, action) => {

  if (action.type === actions.SEND_ANSWER) {
    return Object.assign(
      {}, state,
      { feedback: action.feedback });
  }

  else if (action.type === actions.FETCH_WORD_REQUEST) {
    return Object.assign({}, state, { loading: true, feedback: null });
  }

  else if (action.type === actions.FETCH_WORD_SUCCESS) {
    return Object.assign({}, state, { word: action.word, error: null, loading: false });
  }

  else if (action.type === actions.FETCH_WORD_ERROR) {
    return Object.assign({}, state, { error: action.error, loading: false });
  }

  else {
    return state;
  }
};
