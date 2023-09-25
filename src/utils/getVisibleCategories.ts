import { ICategory } from '@/types/category';

export const getChildCategories = (
  categories: ICategory[],
  selected: string,
) => {
  let visible = categories.filter((cat) => !cat.parent);
  const emptyItem = { _id: 0, label: 'No Matches' };

  if (selected.length) {
    visible = categories.filter(
      (category) => category.parent?._id === selected,
    );
  }

  return visible.length > 0 ? visible : [emptyItem];
};
