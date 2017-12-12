// Dependencies
// ----------------------------------------------------------
import express from 'express';

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

// import api from './routes';
// setup router & static directory


const devPort = 4000;


// Express Configuration
// ----------------------------------------------------------
const app = express(); // express 서버 생성
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
// ----------------------------------------------------------
// app.use('/api', api);

// Listen
// ----------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Hi, our first service');
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});

if (process.env.NODE_ENV === 'development') {
  console.log('Server is running on development mode');
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
    devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
    });
}
