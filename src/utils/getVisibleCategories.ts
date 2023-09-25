import { ICategory } from '@/types/category';

export const getChildCategories = (
  categories: ICategory[] | undefined,
  selected: string,
) => {
  if (selected.length) {
    const visible = categories?.filter(
      (category) => category.parent?._id === selected,
    );

    return visible;
  } else return [];
};
