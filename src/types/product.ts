import { ICategory } from './category';

export interface IProduct {
  brand: string;
  title: string;
  description: string;
  price: number;
  category: ICategory;
  images: string[];
  _id: string;
  article: string;
  __v: number;
  analogs: string[];
  application: string;
  properties: Object;
  [key: string]: any;
}

export interface IProductCard {
  _id: string;
  title: string;
  price: number;
  image: string;
  article: string;
}
