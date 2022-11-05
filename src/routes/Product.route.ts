import express from 'express';
import {
  createProduct,
  deleteProduct,
  readProduct,
  readProducts,
  updateProduct,
} from '../controllers/Product.controller';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const productRouter = express.Router();

productRouter.post('/', ValidateSchema(Schemas.product.create), createProduct);
productRouter.get('/', readProducts);
productRouter.get('/:productId', readProduct);
productRouter.put(
  '/:productId',
  ValidateSchema(Schemas.product.update),
  updateProduct
);
productRouter.delete('/:productId', deleteProduct);

export default productRouter;
