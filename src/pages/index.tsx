import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/category.model';
import { PageContainer } from '@/styles';
import { ICategory } from '@/types/category';
import { H1, H3, SlideContainer, SwiperContainer } from '@/styles/HomePage';
import { convertToJson } from '@/utils/helpers';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  categories: ICategory[];
};

const Home = ({ categories }: Props) => {
  return (
    <section className="container">
      <PageContainer>
        <H1>Showcase your love to car with CarSpares</H1>
        <SwiperContainer>
          <Swiper
            spaceBetween={40}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat._id}>
                <SlideContainer>
                  <Image
                    fill
                    src={cat.image.src}
                    alt={cat.image.name}
                  />

                  <H3>
                    <Link href={'/categories/' + cat._id}>{cat.label}</Link>
                  </H3>
                </SlideContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      </PageContainer>
    </section>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  await mongooseConnect();
  const all = await Category.find().exec();

  const categories = convertToJson(all.filter((cat) => cat.image?.src));

  return {
    props: {
      categories,
    },
  };
};
