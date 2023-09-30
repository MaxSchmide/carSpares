import { useGetCategoriesQuery } from '@/redux';
import { getChildCategories } from '@/utils/getVisibleCategories';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Container, ListItem, Submenu, Ul } from './Catalog.styled';
import LoadingProvider from '@/providers/LoadingProvider';
import { AiOutlineRight } from 'react-icons/ai';
import { hasChildCategory } from '@/utils/hasChildCategory';
import ErrorProvider from '@/providers/ErrorProvider';

export const Catalog = () => {
  const { isLoading, data, isError } = useGetCategoriesQuery();
  const [selected, setSelected] = useState<string>('');

  const parentCategories = useMemo(
    () => data?.filter((cat) => !cat.parent),
    [data],
  );

  const childCategories = getChildCategories(data, selected);

  return (
    <Container>
      <LoadingProvider
        isLoading={isLoading}
        size={25}
      >
        <ErrorProvider isError={isError}>
          <Ul onMouseLeave={() => setSelected('')}>
            {parentCategories &&
              parentCategories.map((category) => (
                <ListItem
                  key={category._id}
                  onMouseEnter={() => setSelected(category._id)}
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
