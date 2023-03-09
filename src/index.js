// index file for webpack
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import QuoteBox from './js/components.js';

const store = createStore(() => {return {}});

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
