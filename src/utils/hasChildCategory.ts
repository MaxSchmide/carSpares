import { ICategory } from '@/types/category';

export const hasChildCategory = (
  categories: ICategory[] | undefined,
  parentId: string,
) => {
  return categories?.some((cat) => cat.parent?._id === parentId);
};
