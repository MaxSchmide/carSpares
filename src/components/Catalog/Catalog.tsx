import { useGetCategoriesQuery } from '@/redux';
import { getChildCategories } from '@/utils/getVisibleCategories';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Container, ListItem, Submenu, Ul } from './Catalog.styled';
import LoadingProvider from '@/providers/LoadingProvider';

const Catalog = () => {
  const { isLoading, data } = useGetCategoriesQuery();
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
      </LoadingProvider>
    </Container>
  );
};

export default Catalog;
