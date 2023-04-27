import React, { useState } from 'react';
import { Container } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import MyButton from '../../../components/my-button';
import './register.scss';
import Password from '../../../components/password';
import MyInput from '../../../components/my-input';
import { useDispatch } from 'react-redux';
import { regsiterReduxServices } from '../../../redux/redux-services/redux-services';
const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('+996');
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    setUserName('')
    setPassword('')
    setPhone('+996')
    dispatch(regsiterReduxServices({phone_number: phone, username: userName, password}))
  }
  return (
    <div className='auth'>
      <h1 className='title-center'>Регистрация</h1>
      <Container>
        <form onSubmit={handleSubmit} className="auth__form">
          <MyInput
            onChange={setPhone}
            value={phone}
            label={'Телефон номер'} />
          <MyInput
            
            onChange={setUserName}
            value={userName}
            label={'Имя пользователя'} />
          <Password
            label={'Пароль'}
            value={password}
            onChange={setPassword} />
          <div className="auth__checkbox">
            <Checkbox color="success" />
            <h3>Запомнить меня</h3>
          </div>
          <MyButton type={'submit'}>Зарегистрироваться</MyButton>
        </form>
      </Container>
    </div>
  );
};

export default Register;