import React from 'react';
import './my-input.scss';
import { TextField } from '@mui/material';

const MyInput = ({value, onChange, label}) => {
  return (
    <TextField
      sx={{ m: 1, width: 382 }}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      value={value}
    />
  );
};

export default MyInput;