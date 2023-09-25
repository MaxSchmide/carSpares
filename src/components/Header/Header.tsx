import logo from '@/assets/logo.svg';
import { Button } from '@/components/Button';
import CatalogIcon from '@/styles/Icons/Catalog.icon';
import SearchIcon from '@/styles/Icons/Search.icon';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import Catalog from '../Catalog/Catalog';
import {
  Bottom,
  Buttons,
  CatalogButton,
  Form,
  Input,
  Label,
  Option,
  Select,
  Top,
} from './Header.styled';

export const Header = () => {
  const [showCatalog, setShowCatalog] = useState(false);
  return (
    <header>
      <Top>
        <Link href="/">
          <Image
            height={72}
            src={logo}
            alt="Car Spares"
          />
        </Link>
        <Form>
          <Input
            type="text"
            id="search"
            placeholder="Type name here..."
          />
          <Select defaultValue={0}>
            <Option
              value="0"
              disabled
            >
              Search By
            </Option>
            <Option value="article">Article</Option>
            <Option value="name">Name</Option>
          </Select>

          <Label htmlFor="search">
            <SearchIcon />
          </Label>
        </Form>

        <Buttons>
          <Button>Log in</Button>
          <Button variant="secondary">Sign Up</Button>
        </Buttons>
      </Top>
      <Bottom>
        <CatalogButton onClick={() => setShowCatalog(!showCatalog)}>
          <CatalogIcon />
          <p>Catalog</p>
        </CatalogButton>
        {showCatalog && <Catalog />}
        <Buttons>
          <Link href="/profile">
            <AiOutlineUser className="icon" />
          </Link>
          <Link
            href="/favourites"
            data-count={2}
            className="nav-icon"
          >
            <AiOutlineHeart className="icon " />
          </Link>
          <Link
            href="/cart"
            className="nav-icon"
            data-count={0}
          >
            <AiOutlineShoppingCart className="icon " />
          </Link>
        </Buttons>
      </Bottom>
    </header>
  );
};
