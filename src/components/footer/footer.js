import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../social';
import SendEmail from '../send-email';
import Container from '@mui/material/Container';
import LogoImg from '../../assets/images/Logo.png';
import './footer.scss';
import ListGroup from '../list-group';
import { useDispatch } from 'react-redux';
import { activeAction } from '../../redux/actions/action';

const Footer = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello world')
    setValue('')
  }
  return (
    <footer className='footer'>
      <Container>
        <div className="content">
          <div className="contact">
            <Link
              onClick={() => dispatch(activeAction(1))}
              to='/'>
              <img src={LogoImg} alt="" />
            </Link>
            <div className="address">
              <Link to='/'>Метэйри, Насирдина Исанова 52/2, Ош, Луизиана</Link>
              <Link to='/'>Свяжитесь с нами: +996 999-999-999</Link>
            </div>
            <Social />
          </div>
          <ListGroup />
          <SendEmail
            value={value}
            setValue={setValue}
            handleSubmit={handleSubmit} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;