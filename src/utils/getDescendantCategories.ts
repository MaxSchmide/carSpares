import { Category } from '@/models/category.model';

export const getDescendantCategories = async (categoryId: string = '') => {
  const categories = await Category.find({ parent: categoryId });

  const descendants: string[] = [categoryId];

  for (const sub of categories) {
    descendants.push(sub._id);
    const subDescendants = await getDescendantCategories(sub._id);
    descendants.push(...subDescendants);
  }

  return descendants;
};
