// Dependencies
// ----------------------------------------------------------
import express from 'express';

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import path from 'path';
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
app.use('/', express.static(path.join(__dirname, './../public')));
/* support client-side routing */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../public/index.html'));
});
app.get('/hello', (req, res) => {
    return res.send('Hello CodeLab');
});

/* handle error */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
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
