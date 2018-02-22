import express from 'express';
import http from 'http';

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

export default router;
