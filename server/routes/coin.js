import express from 'express';
import http from 'http';
import Coin from '../models/coin';

const router = express.Router();

/*
  COIN INFO : GET /api/coin/info
  BODY SAMPLE : {"name" : "ETH"}
  ERROR CODES :
    1 : bad coinname
    2 : coin doesn`t exsit
*/
router.get('/info', (req,res) => {
  setInterval( () => {
    /**
      RETURN
        openingPrice
        highPrice
        lowPrice
        tradePrice
    */
    http.request('http://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/10?code=CRIX.UPBIT.KRW-ETH&count=1&to=2018-02-08%2005:10:00',function(res){
      res.setEncoding('utf8');
      res.on('data', function (result) {
        var data = JSON.parse(result)[0];
        console.log('Price : ' + data.tradePrice);
        return {price: data.tradePrice};
      });
    }).end();
  },1000);
});

/*
  GET ALL COINS : GET /api/coin
*/
router.get('/fetch', (req,res) => {
  // Search database
  Coin.find( (err,coins) => {
    // if(err)
    //   return res.status(500).send({ error: 'database failure' });
    // FIXME database 연결 점 임의로 구현
    return res.json({ name : 'eth'});
  })
});

/*
  COIN ADD : POST /api/coin/register
  BODY SAMPLE : { "coinname" : "ETH", "amount" : 1000 }
  TODO ERROR CODES 정의
*/
router.post('/register', (req,res) => {
  // Create Coin
  let coin = new Coin({
    coinname: req.body.coinname,
    amount: req.body.amount
  });

  // Save in the database
  coin.save( err => {
    if(err) throw err;
    return res.json({ success:true });
  })
});
export default router;
