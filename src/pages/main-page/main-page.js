import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SignIn from '../auth-page/sign-in';
import AboutPage from '../about-page';
import DoctorsPage from '../doctors-page';
import HomePage from '../home-page';
import ServicePage from '../service-page/service-page';
import Register from '../auth-page/register';

const MainPage = () => {

  // когда переключаешь на другую страничку чтобы началось вверх
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='main-page'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/doctors' element={<DoctorsPage/>}/>
        <Route path='/auth/sign-in' element={<SignIn/>}/>
        <Route path='/auth/register' element={<Register/>}/>
      </Routes>
    </div>
  );
};

export default MainPage;