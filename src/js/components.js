import React from 'react';

export default class QuoteBox extends React.Component {
  constructor(props) {
    super(props); 
  }
  
  render() {
    return(
      <div id="quote-box" className="row card align-items-center center col-lg-8 col-md-8 col-sm-10 col-10">
        <div className="blockquote" id="text">
          {this.props.text}
        </div>
        <div className="blockquote-footer text-end" id="author">
          {this.props.author}
        </div>
        <a id="tweeter-quote" title="Tweet this quote!">
          <i className="fa-brands fa-twitter"/>
        </a>
        <button id="new-quote" className="btn btn-primary" onClick={this.props.generate}>
          New quote!
        </button>
      </div>
    );
  }
};
