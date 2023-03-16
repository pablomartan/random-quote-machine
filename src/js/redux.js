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

export const asyncQuote = () => {

  return async function(dispatch) {
    const json = await fetch('https://gist.githubusercontent.com/pablomartan/7bcf4e1cc2ff163828ed10333ef93701/raw/6e67518fe11b10146e8c41a5018f7bf4c68bbc4d/quotes.json').then(async list => await list.json());
    const quoteList = json['quotes'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const quote = quoteList[Math.floor(Math.random() * quoteList.length)];

    dispatch(generateQuote(Object.assign({}, quote, {color: color})));
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

