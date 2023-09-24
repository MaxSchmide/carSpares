import logo from '@/assets/logo.svg';
import Image from 'next/image';
import { Form, Header, Icons, Input, Label } from './Header.styled';
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import Link from 'next/link';

const MyHeader = () => {
  return (
    <Header>
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
        />
        <Label htmlFor="search">
          <AiOutlineSearch className="icon" />
        </Label>
      </Form>

      <Icons>
        <Link href="/favourites">
          <AiOutlineHeart className="icon" />
        </Link>
        <AiOutlineShoppingCart className="icon" />
      </Icons>
    </Header>
  );
};

export default MyHeader;
