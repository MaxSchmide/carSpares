import { ICategory } from '@/types/category';
import api from './api';

export const categoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<ICategory[], void>({
      query: () => '/categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
