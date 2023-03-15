import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const GENERATE = 'GENERATE';
const defaultState = {
  'quote': '',
  'author': ''
}

const colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

// Action Creator
const generateQuote = state => {
  return {
    type: GENERATE,
    state: state
  }
};

const asyncQuote = () => {
  const bg = colors[Math.floor(Math.random() * colors.length)];
  const color = { 'color': bg};

  return async function(dispatch) {
    await fetch('http://localhost:3001/get_quote')
    .then(async res => await res.json())
    .then(parsed => dispatch(generateQuote(Object.assign({}, parsed, color)))))
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
    author: state.author,
    color: state.color
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    generate: () => {
      dispatch(asyncQuote());
    }
  }
};

