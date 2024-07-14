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
import Icon from 'components/Icon';

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
        nextEl: '#next',
        prevEl: '#prev',
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
          <PaginationButton
            id='prev'
            role='button'
            tabIndex={0}
            aria-label='Previous Testimonial'
          >
            <Icon id='right-arrow' size='24px' invert />
          </PaginationButton>
          <div id='swiper-pagination' />
          <PaginationButton
            id='next'
            role='button'
            tabIndex={0}
            aria-label='Next Testimonial'
          >
            <Icon id='right-arrow' size='24px' />
          </PaginationButton>
        </ButtonWrap>
      </Container>
    </Swiper>
  </CarouselWrap>
);

export default Carousel;
