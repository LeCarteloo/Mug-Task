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

    res.status(201).json(product);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Read all products
// @route GET /products
// @access Public
const readProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await productService.readAll();

    res.status(200).json(products);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Read product by id
// @route GET /products/:productId
// @access Public
const readProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productId = req.params.productId;
    const product = await productService.read(productId);

    res.status(200).json(product);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Update product by id
// @route PUT /products/:productId
// @access Public
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price } = req.body;
    const productId = req.params.productId;
    const product = await productService.update(productId, name, price);

    res.status(200).json(product);
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// @desc Delete product by id
// @route DELETE /products/:productId
// @access Public
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.productId;
    const product = await productService.delete(productId);

    res.status(200).json(product);
  } catch (error: any) {
    console.log('test');

    res.status(400).json({
      message: error.message,
    });
  }
};

export {
  createProduct,
  readProducts,
  readProduct,
  updateProduct,
  deleteProduct,
};
