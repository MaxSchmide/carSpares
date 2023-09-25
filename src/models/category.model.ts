import { ICategory } from '@/types/category';
import { Model, Schema, model, models } from 'mongoose';

const CategorySchema = new Schema<ICategory>({
  label: { type: String, required: true },
  parent: { type: Schema.Types.ObjectId, ref: 'Category' },
  properties: [{ type: Object }],
  image: { type: Object },
});

export const Category: Model<ICategory> =
  models?.Category || model('Category', CategorySchema);
