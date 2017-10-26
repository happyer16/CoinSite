// Dependencies
// ----------------------------------------------------------
import express from 'express';
import api from './routes';
// setup router & static directory

// Express Configuration
// ----------------------------------------------------------
const app = express(); // express 서버 생성
const port = 3000;

// Routes
// ----------------------------------------------------------
app.use('/api', api);

// Listen
// ----------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Hi, our first service');
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
