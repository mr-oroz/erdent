import React from 'react';
import AboutUs from '../../components/about-us';
import DiscoverMore from '../../components/discover-more';
import Reception from '../../components/reception';
import { Container } from '@mui/material';

import './about-page.scss';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <Container>
        <DiscoverMore/>
        <AboutUs/>
        <Reception/>
      </Container>
    </div>
  );
};

export default AboutPage;