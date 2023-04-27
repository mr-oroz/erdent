import React from 'react';
import MyButton from '../my-button';
import './advertising.scss';
import HomeImg from '../../assets/images/homeImg.png';

const Advertising = () => {
  return (
    <div className='advertising'>
      <img src={HomeImg} alt="" />
      <h1>Красивая улыбка меняет Всё!</h1>
      <div className="advertising__btn">
        <MyButton textColor="#000" color='#E9E9E9'>Записатсья</MyButton>
      </div>
    </div>
  );
};

export default Advertising;