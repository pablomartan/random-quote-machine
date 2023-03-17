import React from 'react';

const quoteText = (text, color) => {
  return(
    <div id="text" className="text-center h3 m-3 mb-5">
      <p style={{ color: color }}>
        {text}
      </p>
    </div>
  )
};

const quoteAuthor = author => {
  return(
    <div id="author" className="blockquote-footer me-5 text-end">
      {author}
    </div>
  )
};

const buttonContainer = (generateFunction, text, author) => {
  return(
    <div className="row container align-items-center mt-4">
      {twitterButton(text, author)}
      {newQuoteButton(generateFunction)}
    </div>
  )
};

const twitterButton = (text,author) => {
  return(
    <div className="d-flex justify-content-start col-6 col-sm-6 col-md-3">
      <a id="tweet-quote" title="Tweet this quote!" className="btn btn-light"
        href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + text + '" ' + author)} target="_blak">
        <i className="fa-brands fa-twitter"/>
      </a>
    </div>
  )
};

const newQuoteButton = generateFunction => {
  return(
    <div className="d-flex justify-content-end col-6 col-sm-6 col-md-9">
      <button id="new-quote" className="btn btn-primary" onClick={generateFunction}>
        New quote!
      </button>
    </div>
  )
};

export default class QuoteBox extends React.Component {
  constructor(props) {
    super(props); 
  }
  
  render() {
    const color = this.props.color;

    return(
      <div id="wrapper" className="d-flex align-items-center justify-content-center"
        style={{ backgroundColor: color, width: 100 + 'vw', height: 100 + 'vh' }}>
        <div className="card col-10 col-sm-8 col-lg-6">
          <div id="quote-box" className="container card-body d-flex flex-column justify-content-between" style={{ minHeight: 300 + 'px' }}>
            {quoteText(this.props.text, color)}
            {quoteAuthor(this.props.author)}
            {buttonContainer(this.props.generate, this.props.text, this.props.author)}
            <div className="mt-4">
              Find the code at <a href="https://github.com/pablomartan/random-quote-machine">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
