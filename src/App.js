import React, { useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/main-page';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

const App = () => {
  // для aos анимация 
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='App'>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;