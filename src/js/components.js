import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="buttons">
        <SocialLink id="tweeter-quote" title="Tweet this quote!"/>
        <NewQuote />
      </div>
    )
  }
}

class NewQuote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button id="new-quote">
      </button>
    )
  }
}

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <a id={this.props.id} title={this.props.title}>
      </a>
    )
  }
}

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="author">
      </div>
    );
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="text">
      </div>
    );
  }
}

export default class QuoteBox extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return(
      <div id="quote-box">
        <Text />
        <Author />
        <Buttons />
      </div>
    );
  }
};
