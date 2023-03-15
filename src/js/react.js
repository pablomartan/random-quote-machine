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

export default class QuoteBox extends React.Component {
  constructor(props) {
    super(props); 
  }
  
  render() {
    const color = this.props.color;

    return(
      <div id="wrapper" className="d-flex align-items-center justify-content-center"
        style={{ backgroundColor: color, width: 100 + 'vw', height: 100 + 'vh' }}>
        <div className="card col-10 col-sm-8 col-lg-6" >
          <div id="quote-box" className="container card-body">
            {quoteText(this.props.text, color)}
            {quoteAuthor(this.props.author)}
            <div className="row container align-items-center mt-4">
              <div className="d-flex justify-content-start col-6 col-sm-6 col-md-3">
                <a id="tweeter-quote" title="Tweet this quote!" className="btn btn-light">
                  <i className="fa-brands fa-twitter"/>
                </a>
              </div>
              <div className="d-flex justify-content-end col-6 col-sm-6 col-md-9">
                <button id="new-quote" className="btn btn-primary" onClick={this.props.generate}>
                  New quote!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
