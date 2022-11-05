import express from 'express';
import { createProduct } from '../controllers/Product.controller';

const productRouter = express.Router();

productRouter.post('/', createProduct);

export default productRouter;
