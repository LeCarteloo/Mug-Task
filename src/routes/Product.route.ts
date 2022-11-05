import express from 'express';
import { createProduct, readProducts } from '../controllers/Product.controller';

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', readProducts);

export default productRouter;
