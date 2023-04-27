import React from 'react';
import Advertising from '../../components/advertising';
import Reception from '../../components/reception';
import Review from '../../components/review';
import SwiperScroll from '../../components/swiper-scroll';
import Achievement from '../../components/achievement';
import { Container } from '@mui/material';
import './home-page.scss';

const HomePage = () => {
  return (
    <div className='home-page'>
      <Advertising />
      <Container>
        <Achievement />
        <div className="our-doctors">
          <div className="our-doctors-texts">
            <h1>Наши варчи</h1>
            <p>Наши врачи имеют в среднем 15-летний опыт работы и рейтинг удовлетворенности 98%, они действительно выделяют нас!</p>
          </div>
          <SwiperScroll />
        </div>
        <div className="review">
          <h1>Отзывы от наших пациентов</h1>
          <div className="reviews">
            <Review />
            <Review />
            <Review />
          </div>
        </div>
        <Reception />
      </Container>
    </div>
  );
};

export default HomePage;