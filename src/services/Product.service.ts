import mongoose from 'mongoose';
import Product from '../models/Product.model';
import { IProduct } from '../models/Product.model';

class ProductService {
  public create = async (
    name: string,
    price: Number
  ): Promise<IProduct | Error> => {
    try {
      const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name,
        price,
        updateDate: new Date(),
      });
      const createdProduct = await Product.create(product);

      return createdProduct;
    } catch (error) {
      throw new Error('Unable to create product');
    }
  };
}

export default ProductService;
