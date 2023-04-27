import React, { useEffect } from 'react';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import './header.scss';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AvatarImg from '../../assets/images/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import { activeAction } from '../../redux/actions/action';
import BurgerMenu from '../burger-menu';
const Header = () => {
  const dispatch = useDispatch()
  const { active } = useSelector(state => state.globalReducer)
  const { open } = useSelector(state => state.globalReducer);
  return (
    <div className='header'>
      <Container>
        <div className="header__content" open={open}>
          <Link onClick={() => dispatch(activeAction(1))} to='/'>
            <img src={Logo} alt="" />
          </Link>
          <BurgerMenu />
          <nav className='header__menu'>
            <ul>
              <li><Link
                onClick={() => dispatch(activeAction(1))}
                className={active === 1 ? 'active' : ''}
                to='/'>Главная</Link></li>
              <li><Link
                onClick={() => dispatch(activeAction(2))}
                className={active === 2 ? 'active' : ''}
                to='/about'>О нас</Link></li>
              <li><Link
                onClick={() => dispatch(activeAction(3))}
                className={active === 3 ? 'active' : ''}
                to='/services'>Услуги</Link></li>
              <li><Link
                onClick={() => dispatch(activeAction(4))}
                className={active === 4 ? 'active' : ''}
                to='/doctors'>Наши врачи</Link></li>
            </ul>
          </nav>
          <div className="header__auth">
            <Avatar src={AvatarImg} />
            <div className="header__username">
              <Link to='/auth/sign-in'>
                <span className='header__auth-name'>Madana</span>
              </Link>
              <Link to='/auth/register'>
                <span className='header__auth-email'>Madana@gmail.com</span>
              </Link>
            </div>
            <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;