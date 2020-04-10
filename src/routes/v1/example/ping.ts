import express from 'express';
import { SuccessResponse, SuccessMsgResponse } from '../../../core/ApiResponse';

const router = express.Router();

router.use('/ping', (req, res) => {
    return new SuccessResponse({"message": "Pong!"}).send(res);
});

export default router
