import Joi, { ObjectSchema } from 'joi';
import { Response, Request, NextFunction } from 'express';
import log from '../logger';
import { IProduct } from '../models/Product.model';

export const ValidateSchema = (schema: ObjectSchema) => {
  // Returning the body
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      log.error(error);
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  product: {
    create: Joi.object<IProduct>({
      name: Joi.string().required().max(100),
      price: Joi.number().required(),
    }),
    update: Joi.object<IProduct>({
      name: Joi.string().required().max(100),
      price: Joi.number().required(),
    }),
  },
};
