import { Button } from '@/components/Button';
import { CatalogIcon, SearchIcon } from '@/styles/Icons';
import { createQueryString } from '@/utils/createQueryString';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import {
  Bottom,
  Buttons,
  CatalogButton,
  Form,
  Input,
  Label,
  Links,
  Option,
  Select,
  Top,
} from './Header.styled';
import { Catalog } from '../Catalog';
import { useAppSelector } from '@/redux';

export const Header = () => {
  const { items } = useAppSelector((state) => state.favourites);
  const pathname = usePathname();
  const router = useRouter();
  const [showCatalog, setShowCatalog] = useState(false);
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState('');

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();

    const params = createQueryString({ query, searchBy });

    router.replace('/products' + params);
  };

  const handleShowCatalog = (e: MouseEvent) => {
    e.stopPropagation();

    setShowCatalog((prev) => !prev);
  };

  useEffect(() => {
    setQuery('');
    setSearchBy('');
    setShowCatalog(false);
  }, [pathname]);

  useEffect(() => {
    const hideCatalog = () => setShowCatalog(false);

    window.addEventListener('click', hideCatalog);

    return () => window.removeEventListener('click', hideCatalog);
  }, []);

  return (
    <header className="container">
      <Top>
        <Link href="/">
          <Image
            height={72}
            width={100}
            src={'/logo.svg'}
            alt="Car Spares"
          />
        </Link>
        <Form onSubmit={handleSubmitSearch}>
          <Input
            type="text"
            id="search"
            placeholder="Type name here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            aria-label="search by"
          >
            <Option
              value=""
              disabled
            >
              Search By
            </Option>
            <Option value="all">All</Option>
            <Option value="article">Article</Option>
            <Option value="name">Name</Option>
          </Select>

          <Label aria-label="search">
            <SearchIcon />
          </Label>
        </Form>

        <Buttons>
          <Button>Log in</Button>
          <Button $variant="secondary">Sign Up</Button>
        </Buttons>
      </Top>
      <Bottom>
        <CatalogButton onClick={handleShowCatalog}>
          <CatalogIcon />
          <p>Catalog</p>
        </CatalogButton>
        {showCatalog && <Catalog />}
        <Links>
          <Link
            href="/"
            aria-label="Navigate user to home page"
          >
            Home
          </Link>
          <Link
            href="/products"
            aria-label="Navigate user to page with all products"
          >
            Products
          </Link>
          <Link
            href="/categories"
            aria-label="Navigate user to page with all categories"
          >
            Categories
          </Link>
        </Links>
        <Buttons>
          <Link
            href="/favourites"
            data-count={items.length}
            className="nav-icon"
            aria-label="Link to favourites page"
          >
            <AiOutlineHeart className="icon " />
          </Link>
          <Link
            href="/cart"
            className="nav-icon"
            data-count={0}
            aria-label="Link to cart page"
          >
            <AiOutlineShoppingCart className="icon " />
          </Link>
        </Buttons>
      </Bottom>
    </header>
  );
};
