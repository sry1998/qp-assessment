import { Router } from 'express';
import { viewItems } from '../controllers/commonController';

const router = Router();

router.get('/items', viewItems);

export default router;