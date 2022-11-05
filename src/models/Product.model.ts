import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct {
  name: string;
  price: number;
  updateDate: Date;
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  price: {
    type: Number,
    required: true,
  },
  updateDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model<IProductModel>('Product', ProductSchema);
