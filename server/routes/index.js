import express from 'express';
import coin from './coin';
import account from './account';

// api 루트 라우터 생성
const router = express.Router();
router.use('/coin',coin);
router.use('/account',account);

export default router;
