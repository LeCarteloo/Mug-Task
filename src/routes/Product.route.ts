import express from 'express';
import {
  createProduct,
  deleteProduct,
  readProduct,
  readProducts,
  updateProduct,
} from '../controllers/Product.controller';

const productRouter = express.Router();

productRouter.post('/', createProduct);
productRouter.get('/', readProducts);
productRouter.get('/:productId', readProduct);
productRouter.put('/:productId', updateProduct);
productRouter.delete('/:productId', deleteProduct);

export default productRouter;
