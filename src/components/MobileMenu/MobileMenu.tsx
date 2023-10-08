import { PageContainer } from '@/styles';
import { SearchIcon } from '@/styles/Icons';
import { FormEvent } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import {
  Container,
  Form,
  Input,
  Label,
  Links,
  Menu,
  MyLink,
  Ul,
} from './MobileMenu.styled';
import Link from 'next/link';
import { useAppSelector } from '@/redux';

type Props = {
  show: boolean;
  query: string;
  setQuery: (value: string) => void;
  handleSubmit: (event: FormEvent) => void;
};

const MobileMenu = ({ show, query, setQuery, handleSubmit }: Props) => {
  const { items } = useAppSelector((state) => state.favourites);
  return (
    <Container $show={show}>
      <PageContainer>
        <Menu>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              id="search"
              placeholder="Type name here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Label aria-label="search">
              <SearchIcon />
            </Label>
          </Form>
          <Ul>
            <li>
              <MyLink href="/">Home</MyLink>
            </li>
            <li>
              <MyLink href="/products">Products</MyLink>
            </li>
            <li>
              <MyLink href="/categories">Categories</MyLink>
            </li>
          </Ul>
          <Links>
            <Link
              href="/favourites"
              className="nav-icon"
              data-count={items.length}
            >
              <AiOutlineHeart className="icon" />
            </Link>
            <Link
              href="/cart"
              className="nav-icon"
              data-count={0}
            >
              <AiOutlineShoppingCart className="icon" />
            </Link>
          </Links>
        </Menu>
      </PageContainer>
    </Container>
  );
};

export default MobileMenu;
