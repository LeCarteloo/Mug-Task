import express from 'express';
import {
  createProduct,
  readProduct,
  readProducts,
} from '../controllers/Product.controller';

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', readProducts);
productRouter.get('/:productId', readProduct);

export default productRouter;
