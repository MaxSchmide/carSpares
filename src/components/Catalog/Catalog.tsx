/* eslint-disable no-console */
import { ICategory } from '@/types/category';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { getChildCategories } from '@/utils/getVisibleCategories';
import { Container, ListItem, Submenu, Ul } from './Catalog.styled';
import Link from 'next/link';
import { Spinner } from '../Spinner';

const Catalog = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selected, setSelected] = useState<string>('');

  const parentCategories = useMemo(
    () => categories.filter((cat) => !cat.parent),
    [categories],
  );

  const childCategories = getChildCategories(categories, selected);

  const getCategories = async () => {
    try {
      await axios
        .get('/api/categories')
        .then(({ data }) => setCategories(data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      <Ul onMouseLeave={() => setSelected('')}>
        {parentCategories.length > 0 ? (
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
              <Submenu className="submenu">
                {childCategories.map((cat) => (
                  <ListItem
                    key={cat._id}
                    aria-disabled={cat._id === 0}
                  >
                    <Link
                      href={`/categories/${cat._id}`}
                      className="category-link"
                    >
                      {cat.label}
                    </Link>
                  </ListItem>
                ))}
              </Submenu>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <Spinner size={25} />
          </ListItem>
        )}
      </Ul>
    </Container>
  );
};

export default Catalog;
