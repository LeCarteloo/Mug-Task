import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from './logger';
import { Request, Response, NextFunction } from 'express';
import productRouter from './routes/Product.route';

dotenv.config();
const app = express();

// MongoDB connection
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    logger.info('Connection with database established');
    // Server will start only if db is connected
    startServer();
  } catch (error) {
    logger.error({ error });
    process.exit(1);
  }
};
connectDatabase();

const startServer = () => {
  //Logger
  app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(
      `Incoming => Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );

    res.on('finish', () => {
      logger.info(
        `Outgoing => Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      );
    });

    next();
  });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Headers
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Access-Control-Allow-Origin', '*');

    if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      return res.status(200).json({});
    }

    next();
  });

  // Routes
  app.use('/products', productRouter);

  app.use('/healthcheck', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "I'm alive" });
  });

  app.listen(process.env.PORT || 8000, () => {
    logger.info(
      `Server listing on http://localhost:${process.env.PORT || 8000}`
    );
  });
};
