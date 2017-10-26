import express from 'express';
import account from './account';
import map from './map';

// api 루트 라우터 생성
const router = express.Router();
router.use('/account', account);
router.use('/map', map);

export default router;
