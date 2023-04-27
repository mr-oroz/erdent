import React from 'react';
import './service-component.scss';
import { tooth } from '../../utils/utils';

const ServiceComponent = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      className='service-component'>
      {
        tooth.map(item => {
          return <div className='service-component__item'>
            <img src={item.img} alt="" />
            {item.vector !== null ? <img src={item.vector} alt="" /> : null}
            <div className="service-component__item-text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        })
      }
    </div>
  );
};

export default ServiceComponent;