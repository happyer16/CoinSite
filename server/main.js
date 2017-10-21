import express from 'express'

const app=express();  // express 서버 생성

app.get('/',(req,res)=>{
  res.send("Hi, our first service");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
