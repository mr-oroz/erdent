import React, { useState } from 'react';
import { Container } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import MyButton from '../../../components/my-button';
import './sign-in.scss';
import Password from '../../../components/password';
import MyInput from '../../../components/my-input';
import { signInReduxServices } from '../../../redux/redux-services/redux-services';
import { useDispatch, useSelector } from 'react-redux';
const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.globalReducer)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserName('')
    setPassword('')
    dispatch(signInReduxServices({ username: userName, password }))
  }
  return (
    <div className='auth'>
      <h1 className='title-center'>Войти</h1>
      <Container>
        <form onSubmit={handleSubmit} className="auth__form">
          <MyInput
            onChange={setUserName}
            value={userName}
            label={'Имя пользователя '} />
          <Password
            label={'Пароль'}
            value={password}
            onChange={setPassword} />
          <div className="auth__checkbox">
            <Checkbox color="success" />
            <h3>Запомнить меня</h3>
          </div>
          <MyButton type={'submit'}>{loading ? 'loading...' : 'Войти'}</MyButton>
        </form>
      </Container>
    </div>
  );
};

export default SignIn;