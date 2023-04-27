import React from 'react';
import Img1 from '../../assets/images/image 26.png';
import Img2 from '../../assets/images/image 27.png';
import Img3 from '../../assets/images/image 28.png';
import ImgMobile1 from '../../assets/images/achie1.png';
import ImgMobile2 from '../../assets/images/achie2.png';
import ImgMobile3 from '../../assets/images/achie3.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './achievement.scss';

const Achievement = () => {
  return (
    <div className='achievement'
      data-aos="fade-up"
      data-aos-offset="100">
      <div className="left">
        <h1>Самое качественное обслуживание с нашими опытными врачами</h1>
        <p>С нашими лучшими врачами мы можем предоставлять лучшие медицинские услуги выше среднего. У нас есть высококвалифицированные врачи, так что не волнуйтесь, они также очень талантливы в своих областях.</p>
        <div className="achievement__about">
          <div className="achievement__text">
            <CheckCircleIcon />
            <p>Ищите своего специалиста и онлайн-консультации в любом месте</p>
          </div>
          <div className="achievement__text">
            <CheckCircleIcon />
            <p>Консультация наших ведущих специалистов</p>
          </div>
          <div className="achievement__text">
            <CheckCircleIcon />
            <p>Врачи доступны 24/7</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="achievement__item1">
          <img src={Img1} alt="" />
        </div>
        <div className="achievement__item2">
          <img src={Img3} alt="" />
        </div>
        <div className="achievement__item3">
          <img src={Img2} alt="" />
        </div>
      </div>
      <div className="rightMobile">
        <div className="achievement__item1">
          <img src={ImgMobile1} alt="" />
        </div>
        <div className="achievement__item2">
          <img src={ImgMobile2} alt="" />
        </div>
        <div className="achievement__item3">
          <img src={ImgMobile3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;