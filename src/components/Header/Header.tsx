import { Button } from '@/components/Button';
import { useAppSelector } from '@/redux';
import { headerSelect } from '@/styles';
import { CatalogIcon, SearchIcon } from '@/styles/Icons';
import { SelectOption } from '@/types/select';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import ReactSelect from 'react-select';
import { Catalog } from '../Catalog';
import {
  Bottom,
  Buttons,
  CatalogButton,
  Form,
  Input,
  Label,
  Links,
  MenuIcon,
  MyLink,
  Top,
} from './Header.styled';
import { createQueryString } from '@/utils/helpers';
import MobileMenu from '../MobileMenu/MobileMenu';

export const Header = () => {
  const { items } = useAppSelector((state) => state.favourites);
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const pathname = usePathname();
  const router = useRouter();
  const [showCatalog, setShowCatalog] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState<SelectOption | null>(null);
  const instanceId = new Date().getDay().toString();
  const selectOptions = [
    {
      value: 'name',
      label: 'Name',
    },
    {
      label: 'Article',
      value: 'article',
    },
  ];

  const handleSubmitSearch = (e: FormEvent) => {
    e.preventDefault();

    const params = createQueryString({
      query,
      searchBy: searchBy?.value || '',
    });

    router.replace('/products' + params);
  };

  const handleShowCatalog = (e: MouseEvent) => {
    e.stopPropagation();

    setShowCatalog((prev) => !prev);
  };

  useEffect(() => {
    setQuery('');
    setSearchBy(null);
    setShowCatalog(false);
    setShowMenu(false);
  }, [pathname]);

  useEffect(() => {
    const hideCatalog = () => setShowCatalog(false);

    window.addEventListener('click', hideCatalog);

    return () => window.removeEventListener('click', hideCatalog);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('hidden', showMenu);
  }, [showMenu]);

  return (
    <header className="container fixed">
      <Top>
        <MyLink href="/">
          <Image
            src={'/logo.svg'}
            alt="Car Spares"
            fill
            priority
          />
        </MyLink>
        <Form onSubmit={handleSubmitSearch}>
          <Input
            type="text"
            id="search"
            placeholder="Type name here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ReactSelect
            instanceId={instanceId}
            onChange={(e) => setSearchBy(e)}
            value={searchBy}
            options={selectOptions}
            styles={headerSelect}
            placeholder={'Search By'}
          />

          <Label aria-label="search">
            <SearchIcon />
          </Label>
        </Form>

        <Buttons>
          <Button>Log in</Button>
          <Button $variant="secondary">Sign Up</Button>
        </Buttons>
        <MenuIcon onClick={() => setShowMenu((prev) => !prev)}>
          {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </MenuIcon>
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
            data-count={cartItems.length}
            aria-label="Link to cart page"
          >
            <AiOutlineShoppingCart className="icon " />
          </Link>
        </Buttons>
      </Bottom>
      <MobileMenu
        handleSubmit={handleSubmitSearch}
        show={showMenu}
        query={query}
        setQuery={(val) => setQuery(val)}
      />
    </header>
  );
};
