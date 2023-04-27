import React from 'react';
import Reception from '../../components/reception';
import ServiceComponent from '../../components/service-component';
import './service-page.scss';

const ServicePage = () => {
  return (
    <div className='service-page'>
      <div className='container'>
        <h1 className='title-center'>Услуги</h1>
        <ServiceComponent/>
        <Reception/>
      </div>
    </div>
  );
};

export default ServicePage;