import React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import '../../assets/scss/font.scss';

const MyButton = ({ children, color, textColor="#fff", onClick, type }) => {

  const ColorButton = styled(Button)(() => ({
    color: textColor,
    backgroundColor: color,
    height: '40px',
    width: "80%",
    maxWidth: '253px',
    textTransform: 'capitalize',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '14px',
    '&:hover': {
      backgroundColor: color,
    },
  }));

  return (
    <ColorButton
      type={type}
      onClick={onClick}
      variant="contained">
      {children}
    </ColorButton>
  );
};

export default MyButton;