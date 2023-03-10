import React from 'react';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="buttons">
        <SocialLink id="tweeter-quote" title="Tweet this quote!"/>
        <NewQuote generate={this.props.generate}/>
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
      <button id="new-quote" onClick={this.props.generate}>
        New quote!
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
        <i className="fas fa-twitter"></i>
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
        {this.props.author}
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
        {this.props.text}
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
        <Text text={this.props.text} />
        <Author author={this.props.author} />
        <Buttons generate={this.props.generate}/>
      </div>
    );
  }
};
