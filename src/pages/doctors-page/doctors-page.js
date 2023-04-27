import { Container } from '@mui/material';
import React from 'react';
import OurDoctor from '../../components/our-doctor';
import Reception from '../../components/reception';
import './doctors-page.scss';
import { useNavigate } from 'react-router-dom';
const DoctorsPage = () => {
  const navigate = useNavigate()
  const doctorDetail = () => {
    navigate('/doctor-detail')
  }
  return (
    <div className='doctors-page'>
      <Container>
        <h1 className='title-center'>Наши врачи</h1>
        <div className="doctors-page__row">
          <OurDoctor />
          <OurDoctor />
          <OurDoctor />
          <OurDoctor />
          <OurDoctor />
          <OurDoctor />
          <OurDoctor />
          <OurDoctor />
          <OurDoctor />
          <OurDoctor />
        </div>
        <Reception />
      </Container>
    </div>
  );
};

export default DoctorsPage;