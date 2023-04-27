import React from 'react';
import DiscImg from '../../assets/images/image 29.png'
import DiscImg1 from '../../assets/images/image 30.png'
import MyButton from '../my-button';
import './discover-more.scss';

const DiscoverMore = () => {
  return (
    <div className='discover-more'>
      <div className="left">
        <img src={DiscImg} alt="" />
      </div>
      <div className="center">
        <h1>О нашей <br /> клинике</h1>
        <p>
        В наших отделениях можно получить консультацию специалистов как самых востребованных, так и достаточно редких стоматологических направлений, что позволяет решить большинство стоматологических вопросов за одно посещение. 
        </p>
        <MyButton color='#1F2937'>Узнать больше</MyButton>
      </div>
      <div className="right">
        <img src={DiscImg1} alt="" />
      </div>
    </div>
  );
};

export default DiscoverMore;