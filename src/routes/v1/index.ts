import express from 'express';
import example from './example/ping';

const router = express.Router();

router.use('/example', example);

export default router;
