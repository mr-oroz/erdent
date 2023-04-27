import React from 'react';
import './our-doctor.scss';
import DoctorImg from '../../assets/images/EOSR8398.jpg'

const OurDoctor = () => {
  return (
    <div className='our-doctor'>
      <div className="our-doctor__images">
        <img src={DoctorImg} alt="" />
      </div>
      <div className="our-doctor__info">
        <h2>Dr Amanda Linda </h2>
        <span>Dentist Specilist</span>
      </div>
    </div>
  );
};

export default OurDoctor;