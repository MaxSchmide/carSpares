import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/product.model';
import { toggleFavouriteItem, useAppDispatch, useAppSelector } from '@/redux';
import { PageContainer } from '@/styles';
import { FavouriteIcon } from '@/styles/Icons';
import {
  Article,
  Big,
  BigImage,
  Buttons,
  Details,
  H3,
  Icon,
  ImageContainer,
  Images,
  Info,
  Price,
  Properties,
  Property,
  Section,
  Small,
  SmallImage,
  SubTitle,
  Title,
} from '@/styles/ProductPage';
import { IProduct } from '@/types/product';
import { convertToJson } from '@/utils/helpers';
import { GetServerSideProps } from 'next';
import { useMemo, useState } from 'react';

type Props = {
  product: IProduct;
};

const ProductPage = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.favourites);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const links = [
    {
      url: '/products',
      label: 'Products',
    },
    {
      label: product?.article || '',
      url: '/products/' + product?._id || '',
    },
  ];

  const productCard = useMemo(
    () => ({
      _id: product._id,
      title: product.title,
      price: product.price,
      article: product.article,
      image: product.images[0],
    }),
    [],
  );

  const isFavourite = items.some((item) => item._id === product._id);

  const handleSelectImage = (src: string) => {
    setSelectedImage(src);
  };

  const handleToggleFavourite = () => {
    dispatch(toggleFavouriteItem(productCard));
  };

  return (
    <PageContainer className="container">
      <Breadcrumb links={links} />
      <Title>{product.title}</Title>
      <Section>
        <Images>
          <Small>
            {product.images.map((img) => (
              <ImageContainer
                key={img}
                $selected={img === selectedImage}
                onClick={() => handleSelectImage(img)}
              >
                <SmallImage
                  src={img}
                  alt={product.title}
                  fill
                />
              </ImageContainer>
            ))}
          </Small>
          <Big>
            <BigImage
              src={selectedImage}
              fill
              alt={product.title}
            />
          </Big>
        </Images>
        <Details>
          <Price>Price: {product.price}</Price>
          <Properties>
            <Property>
              <p>Article :</p>
              <p>{product.article}</p>
            </Property>
            {product.properties &&
              Object.entries(product.properties).map(([key, value]) => (
                <Property key={key}>
                  <p>{key} :</p>
                  <p>{value}</p>
                </Property>
              ))}
          </Properties>
          <Buttons>
            <Button
              $variant="primary"
              className="product-button"
              $size={12}
            >
              Add to card
            </Button>
            <Icon onClick={handleToggleFavourite}>
              <FavouriteIcon
                $active={isFavourite}
                $size={3}
              />
            </Icon>
          </Buttons>
        </Details>
      </Section>
      <section>
        <SubTitle>Info</SubTitle>
        <Info>
          <H3>Category</H3>
          <Article>{product.category.label}</Article>
        </Info>
        {product.application && (
          <Info>
            <H3>Application</H3>
            <Article>{product.application}</Article>
          </Info>
        )}
        <Info>
          <H3>Analogs</H3>
          <Article>{product.analogs.join(', ')}</Article>
        </Info>
        {product.description && (
          <Info>
            <H3>Description</H3>
            <Article>{product.description}</Article>
          </Info>
        )}
      </section>
    </PageContainer>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;

  if (id === 'favicon.svg' || id === 'manifest.json') {
    return {
      props: {},
    };
  }

  await mongooseConnect();

  const product = await Product.findById(id).populate('category');

  return {
    props: {
      product: convertToJson(product),
    },
  };
};
