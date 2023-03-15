import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const GENERATE = 'GENERATE';
const defaultState = {
  'quote': '',
  'author': ''
}

// Action Creator
const generateQuote = state => {
  return {
    type: GENERATE,
    state: state
  }
};

const asyncQuote = () => {

  return async function(dispatch) {
    await fetch('http://localhost:3001/get_quote')
    .then(async res => await res.json())
    .then(parsed => dispatch(generateQuote(parsed)))
  }
};

const reducer = (state = defaultState, action) => {
  return action.type == GENERATE ? action.state : state;
};

const asyncMiddleware = applyMiddleware(thunk);

export const store = createStore(reducer, asyncMiddleware);

export const mapStateToProps = state => {
  return {
    text: state.quote,
    author: state.author
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    generate: () => {
      dispatch(asyncQuote());
    }
  }
};

