// index file for webpack
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import QuoteBox from './js/components.js';

const GENERATE = 'GENERATE';
const defaultState = {
  'quote': '',
  'author': ''
}

// Action Creator
const generateQuote = () => {
  return {
    type: GENERATE
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

const store = createStore(reducer, asyncMiddleware);

const mapStateToProps = state => {
  return {
    text: state.quote,
    author: state.author
  }
};

const mapDispatchToProps = dispatch => {
  return {
    generate: () => {
      dispatch(asyncQuote());
    }
  }
};

const Present = connect(mapStateToProps,mapDispatchToProps)(QuoteBox);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Present />
  </Provider>
)
