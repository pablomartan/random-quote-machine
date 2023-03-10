// index file for webpack
import React from 'react';
import ReactDOM from 'react-dom';
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

const reducer = (state = defaultState, action) => {
  return action.type == GENERATE ? generateState() : state;
};

const store = createStore(reducer);

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
