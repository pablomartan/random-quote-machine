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

const generateState = () => {
  return {
    'quote': `This is a quote with rand number ${Math.floor(Math.random() * 4)}`,
    'author': `Author No. ${Math.floor(Math.random() * 100)}`
  }
};

const reducer = (state = defaultState, action) => {
  return action.type == GENERATE ? generateState() : state;
};

const store = createStore(reducer);
console.log(store.getState());

const mapStateToProps = state => {
  return {
    text: state.quote,
    author: state.author
  }
};

const mapDispatchToProps = dispatch => {
  return {
    generate: () => {
      dispatch(generateQuote());
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
