import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarImg from '../../assets/images/User Image 03.png'
import './review.scss';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Review = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      className='review'>
      <div className="review-text active">
        <FormatQuoteIcon />
        <p>When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
      </div>
      <div className="avatar">
        <Avatar src={AvatarImg} />
        <h3>Alen Max</h3>
        <span>Designer</span>
      </div>
    </div>
  );
};

export default Review;