// Dependencies
// ----------------------------------------------------------
import express from 'express';

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import path from 'path';
import cors from 'cors';
import api from './routes';

// setup router & static directory
var http = require('http');
var socketio=require('socket.io')(http);

const devPort = 4000;

// Express Configuration
// ----------------------------------------------------------
const app = express(); // express 서버 생성
const port = 3000;

// database
import mongoose from 'mongoose';
import session from 'express-session';

/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect('mongodb://localhost/codelab');

/* use session */
app.use(session({
  secret: 'CodeLab1$1$234',
  resave: false,
  saveUninitialized: true
}));

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
// ----------------------------------------------------------
app.use('/api', api);

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


var server = http.createServer(app).listen(port, () => {
  console.log('server start ' + port);
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
  console.log(socket.request.connection._peername + ' connection info');
  socket.remoteAddress = socket.request.connection._peername.address;
  socket.remotePort = socket.request.connection._peername.port;

  socket.on('message', (message) => {
    console.log('message 이벤트를 서버가 받았습니다.');
    console.log(message);

    io.sockets.emit('message',message);
    if(message.recepient == 'ALL'){
      console.log('모든 클라이언트에게 message 이벤트를 전송합니다.');
      io.sockets.emit('message',message);
    }
  });

  socket.on('coinPrice',(coinName) => {
    console.log('Server : ' + coinName + ' 가격 조회 요청이 왔습니다.')
    setInterval( () => {
      /**
        RETURN
          openingPrice
          highPrice
          lowPrice
          tradePrice
      */
      http.request('http://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/10?code=CRIX.UPBIT.KRW-'+coinName,function(res){
        res.setEncoding('utf8');
        res.on('data', function (result) {
          var data = JSON.parse(result)[0];
          socket.emit('coinPrice',data.tradePrice);
          return {price: data.tradePrice};
        });
      }).end();
    },1000);
  });
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
