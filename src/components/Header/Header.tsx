import logo from '@/assets/logo.svg';
import Image from 'next/image';
import {
  Bottom,
  Buttons,
  Catalog,
  Form,
  Input,
  Label,
  Option,
  Select,
  Top,
} from './Header.styled';
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import Link from 'next/link';
import CatalogIcon from '@/styles/Icons/Catalog.icon';
import SearchIcon from '@/styles/Icons/Search.icon';
import { Button } from '@/components/Button';

export const Header = () => {
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
        <Catalog>
          <CatalogIcon />
          <p>Catalog</p>
        </Catalog>
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
