import { Router } from 'express';
import {addItem, updateItem, deleteItem } from '../controllers/adminController';

const router = Router();

router.post('/add', addItem);

router.put('/update/:id', updateItem);

router.delete('/delete/:id', deleteItem);

export default router;
