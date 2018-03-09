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
router.get('/', (req,res) => {
  // Search database
  Coin.find()
  .exec((err,coins) => {
    if(err) throw err;
    res.json(coins);
  })
});

/*
  COIN ADD : POST /api/coin
  BODY SAMPLE : { "name" : "ETH", "amount" : 1000, "buyAvg": 100, "buySum": 1000 * 100 }
  TODO ERROR CODES 정의
*/
router.post('/', (req,res) => {
  // Create Coin
  let coin = new Coin({
    name: req.body.coin.name,
    amount: req.body.coin.amount,
    buyAvg: req.body.coin.buyAvg,
    buySum: req.body.coin.buySum
  });

  // Save in the database
  coin.save( err => {
    if(err) throw err;
    return res.json({ success:true });
  })
});
export default router;
