import React from 'react';
import MyButton from '../my-button';
import './reception.scss';
import Img from '../../assets/images/image 32.png';
const Reception = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      className='reception'>
      <div className="left">
        <h1>Записаться</h1>
        <p>Запишитесь на прием когда вы хотите и во сколько вы хотите! lorem ipsum i bla bla bla bla!</p>
        <MyButton color='#27386E'>Записаться на прием</MyButton>
      </div>
      <div className="right">
        <img src={Img} alt="" />
      </div>
    </div>
  );
};

export default Reception;