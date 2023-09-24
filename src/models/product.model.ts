import { IProduct } from '@/types/product';
import mongoose, { Model, Schema, model, models } from 'mongoose';
import { Category } from './category.model';

const ProductSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  description: String,
  application: String,
  article: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Types.ObjectId, ref: Category },
  images: [String],
  analogs: [{ type: String, required: true }],
  properties: { type: Object },
});

export const Product: Model<IProduct> =
  models?.Product || model('Product', ProductSchema);
