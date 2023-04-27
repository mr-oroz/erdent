import React from 'react';
import { Link } from 'react-router-dom';
import './list-group.scss';

const ListGroup = () => {
  
  return (
    <div className='list-group'>
      <ul>
        <li><span className='list-title'>Категории</span></li>
        <li><Link to='/' className='list-item'>Главная</Link></li>
        <li><Link to='/' className='list-item'>Касательно</Link></li>
        <li><Link to='/' className='list-item'>Услуги</Link></li>
        <li><Link to='/' className='list-item'>Обзоры</Link></li>
        <li><Link to='/' className='list-item'>Статья</Link></li>
      </ul>
      <ul>
        <li><span className='list-title'>Относительно</span></li>
        <li><Link to='/' className='list-item'>Партнеры</Link></li>
        <li><Link to='/' className='list-item'>Карьеры</Link></li>
        <li><Link to='/' className='list-item'>Пресс</Link></li>
        <li><Link to='/' className='list-item'>Сообщество</Link></li>
      </ul>
    </div>
  );
};

export default ListGroup;