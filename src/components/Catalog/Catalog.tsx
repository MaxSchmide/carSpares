import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { Container, ListItem, Submenu, Ul } from './Catalog.styled';
import LoadingProvider from '@/providers/LoadingProvider';
import { AiOutlineRight } from 'react-icons/ai';
import ErrorProvider from '@/providers/ErrorProvider';
import { useQuery } from '@/hooks';
import { ICategory } from '@/types/category';
import { getChildCategories, hasChildCategory } from '@/utils/helpers';

export const Catalog = () => {
  const { isLoading, data, isError } = useQuery<ICategory[]>('/categories');
  const [selected, setSelected] = useState<string>('');

  const parentCategories = useMemo(
    () => data?.filter((cat) => !cat.parent),
    [data],
  );

  const childCategories = getChildCategories(data, selected);

  const handleSelectCategory = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelected(id);
  };

  return (
    <Container>
      <LoadingProvider
        isLoading={isLoading}
        size={25}
      >
        <ErrorProvider isError={isError}>
          <Ul onMouseLeave={(e) => handleSelectCategory(e, '')}>
            {parentCategories &&
              parentCategories.map((category) => (
                <ListItem
                  key={category._id}
                  onMouseEnter={(e) => handleSelectCategory(e, category._id)}
                  onClick={(e) => handleSelectCategory(e, category._id)}
                >
                  <Link
                    href={`/categories/${category._id}`}
                    className="category-link"
                  >
                    {category.label}
                  </Link>

                  {hasChildCategory(data, category._id) && (
                    <AiOutlineRight className="menu-icon" />
                  )}

                  {childCategories && childCategories?.length > 0 && (
                    <Submenu className="submenu">
                      {childCategories.map((cat) => (
                        <ListItem key={cat._id}>
                          <Link
                            href={`/categories/${cat._id}`}
                            className="category-link"
                          >
                            {cat.label}
                          </Link>
                        </ListItem>
                      ))}
                    </Submenu>
                  )}
                </ListItem>
              ))}
          </Ul>
        </ErrorProvider>
      </LoadingProvider>
    </Container>
  );
};
