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
    } catch (error: any) {
      throw new Error(error);
    }
  };

  public readAll = async (): Promise<IProduct[] | Error> => {
    try {
      const products = await Product.find();
      return products;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  public read = async (productId: string): Promise<IProduct | null | Error> => {
    try {
      const product = await Product.findById(productId);

      if (!product) {
        throw new Error('Product doesnt exist');
      }

      return product;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  public update = async (
    productId: string,
    name: string,
    price: number
  ): Promise<IProduct | null | Error> => {
    try {
      const productExist = await Product.findById(productId);

      if (!productExist) {
        throw new Error("Product doesn't exist");
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        {
          name,
          price,
          updateDate: new Date(),
        },
        { new: true }
      );

      return updatedProduct;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  public delete = async (
    productId: string
  ): Promise<IProduct | null | Error> => {
    try {
      const productExist = await Product.findById(productId);

      if (!productExist) {
        throw new Error('Product doesnt exist');
      }

      const deletedProduct = await Product.findByIdAndDelete(productId);

      return deletedProduct;
    } catch (error: any) {
      throw new Error(error);
    }
  };
}

export default ProductService;
