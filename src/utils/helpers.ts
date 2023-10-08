import { ICategory } from '@/types/category';
import { theme } from '@/styles';
import { Category } from '@/models/category.model';
import { IProductCart } from '@/types/product';

type Params = {
  [key: string]: string;
};

export const hasChildCategory = (
  categories: ICategory[] | undefined,
  parentId: string,
) => {
  return categories?.some((cat) => cat.parent?._id === parentId);
};

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

export const getColorByProps = (props: any) => {
  switch (props.$variant) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary;
    default:
      return '#ffffff';
  }
};

export const createQueryString = (params: Params) => {
  const newParams: string[] = [];
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      newParams.push(`${key}=${value}`);
    }
  }

  return newParams.length > 0 ? `?${newParams.join('&')}` : '';
};

export const convertToJson = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

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

export const countTotalSum = (items: IProductCart[]) => {
  return Math.round(items.reduce((acc, cur) => acc + cur.count * cur.price, 0));
};
