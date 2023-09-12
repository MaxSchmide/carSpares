export interface ICategory {
  label: string;
  _id: string;
  __v: number;
  parent?: Omit<ICategory, 'parent'>;
  properties?: IProperty[];
  image: Omit<ICategoryImage, 'id'>;
  [key: string]: any;
}

interface IProperty {
  name: string;
  values: string[];
}

interface ICategoryImage {
  id: string;
  name: string;
  src: string;
}
