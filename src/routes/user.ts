import { Router } from 'express';
import { orderItems } from '../controllers/userController';

const router = Router();

router.post('/order', orderItems);

export default router