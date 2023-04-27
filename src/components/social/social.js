import React from 'react';
import './social.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Tooltip from '@mui/material/Tooltip';

const Social = () => {
  return (
    <div className="social">
      <div className="social-icon">
        <a
          href='https://www.instagram.com/nomadstore.osh/'
          target='blank'>
          <Tooltip placement="top" title='instagram'>
            <InstagramIcon />
          </Tooltip>
        </a>
      </div>
      <div className="social-icon">
        <a
          href='https://www.facebook.com/oshnomadstore'
          target='blank'>
          <Tooltip placement="top" title='facebook'>
            <FacebookIcon />
          </Tooltip>
        </a>
      </div>
      <div className="social-icon">
        <a
          href='https://api.whatsapp.com/send/?phone=996557129811&text&type=phone_number&app_absent=0'
          target='blank'>
          <Tooltip placement="top" title='what`s app'>
            <WhatsAppIcon />
          </Tooltip>
        </a>
      </div>
    </div>
  );
};

export default Social;