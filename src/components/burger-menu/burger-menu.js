import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Avatar from '../../assets/images/Profile image.png';
import './burger-menu.scss';
import { useNavigate } from 'react-router-dom';
import MyButton from '../my-button/my-button';

const BurgerMenu = () => {
  const [menuList] = React.useState([
    {id: 1, title: 'ГЛАВНАЯ', route: '/'},
    {id: 2, title: 'НАШИ ВРАЧИ', route: '/our doctors'},
    {id: 3, title: 'УСЛУГИ', route: '/services'},
    {id: 4, title: 'О НАС', route: '/about'},
  ])
  const navitage = useNavigate()
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className='burger-menu'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="burger-menu__avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="burger-menu__name">
        <h3>Алина Герц</h3>
        <span>alinagerc@gmail.com</span>
      </div>
      <div className="burger-menu__list">
        <ul>
            {menuList.map(item => (
              <li 
                onClick={() => navitage(`${item.route}`)}
                key={item.id}>{item.title}</li>
            ))}
        </ul>
      </div>
      <div className="burger-menu__btn">
        <MyButton color='#27386E'>Выход</MyButton>
      </div>
    </Box>
  );

  return (

    <div>
      {['right'].map((anchor) => (
        <div className='burger-menu'>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
}

export default BurgerMenu;
