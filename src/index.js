// index file for webpack
import React from 'react';
import ReactDOM from 'react-dom/client';
import QuoteBox from './js/react.js';
import { Provider, connect } from 'react-redux';
import { store, mapStateToProps, mapDispatchToProps, asyncQuote } from './js/redux.js'

const Present = connect(mapStateToProps,mapDispatchToProps)(QuoteBox);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Present />
  </Provider>
)

window.onload = store.dispatch(asyncQuote());
