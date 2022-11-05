import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/Product.service';

const productService = new ProductService();

// @desc Create product
// @route POST /products
// @access Public
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price } = req.body;
    const product = await productService.create(name, price);

    res.status(201).json({ product });
  } catch (error) {
    res.status(400).json({ message: 'Cannot create product' });
  }
};

export { createProduct };
