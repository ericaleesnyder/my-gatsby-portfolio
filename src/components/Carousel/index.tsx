import Container from 'basics/Container.styled';
import React, { type FC, type ReactElement } from 'react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {
  ButtonWrap,
  CarouselWrap,
  PaginationButton,
  Slide,
} from 'components/Carousel/styles/Carousel.styled';

interface CarouselProps {
  slides: ReactElement[];
  spaceBetween?: number;
}

const Carousel: FC<CarouselProps> = ({ slides, spaceBetween }) => (
  <CarouselWrap>
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={spaceBetween ?? 25}
      modules={[Navigation, Pagination, A11y]}
      navigation={{
        nextEl: '#test-next',
        prevEl: '#test-prev',
      }}
      grabCursor
      pagination={{
        clickable: true,
        el: '#swiper-pagination',
        renderBullet: (index, className) => {
          const ariaLabel = `Go to slide ${index + 1}`;

          return (
            '<span class="' +
            className +
            '" aria-label="' +
            ariaLabel +
            '"> </span>'
          );
        },
      }}
      breakpoints={{
        575: {
          slidesPerView: 1.5,
        },
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={Math.random()}>
          <Slide>{slide}</Slide>
        </SwiperSlide>
      ))}
      <Container>
        <ButtonWrap>
          <PaginationButton id='test-prev' role='button' tabIndex={0}>
            <use href='/icons/sprites.svg#right-arrow' />
          </PaginationButton>
          <div id='swiper-pagination' />
          <PaginationButton id='test-next' role='button' tabIndex={0}>
            <use href='/icons/sprites.svg#right-arrow' />
          </PaginationButton>
        </ButtonWrap>
      </Container>
    </Swiper>
  </CarouselWrap>
);

export default Carousel;
