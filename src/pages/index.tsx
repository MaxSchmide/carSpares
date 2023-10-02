import { Swiper, SwiperSlide } from 'swiper/react';
import { Category } from '@/models/category.model';
import { convertToJson } from '@/utils/convertToJson';
import { ICategory } from '@/types/category';
import Image from 'next/image';
import 'swiper/css';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { PageContainer } from '@/styles';
import { H1, H3, SlideContainer, SwiperContainer } from '@/styles/Homepage';
import { GetServerSideProps } from 'next';

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
  const all = await Category.find();

  const categories = convertToJson(all.filter((cat) => cat.image?.src));

  return {
    props: {
      categories,
    },
  };
};
