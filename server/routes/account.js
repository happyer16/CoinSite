import express from 'express';

const router = express.Router();

/*
  ( routes 작성시 주석 양식 )
  ACCOUNT SIGNUP : POST /api/account/SIGNUP
  BODY SAMPLE : {"username" : "test", "password" : "test"}
  ERROR CODES :
    1 : bad username
    2 : bad password
    3 : username exists
*/
router.post('/signup', (req, res) => {
  console.log(req, res);
});
