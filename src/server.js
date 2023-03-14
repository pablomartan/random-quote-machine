import express from 'express';
import cors from 'cors';
import getQuote from './js/quotes.js'

const app = express();
app.use(cors());

app.get('/get_quote', (req, res) => {
  const quote = getQuote();

  console.log(quote);
  res.send(JSON.stringify(quote));
});

app.listen(3001, () => console.log('Listening on port 3001'));
