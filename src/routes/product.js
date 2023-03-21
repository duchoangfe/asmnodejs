import express from 'express';
import { GetAll, Create, Delete } from '../controllers/product';
const router = express.Router();
router.get('/products', GetAll);
router.post('/products', Create);
router.delete('/products/:id', Delete);

export default router;
