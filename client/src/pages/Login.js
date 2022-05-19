import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'
axios.defaults.withCredentials = true;

export default function Login ({ handleResponseSuccess }) {
  const navigate= useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    
    if(loginInfo.email !=='' && loginInfo.password !== ''){
      axios.post('http://localhost:8080/users/login',{
        email: loginInfo.email,
        password: loginInfo.password
      }).then( handleResponseSuccess )
      navigate('/')
    }else{
      setErrorMessage('이메일과 비밀번호를 입력하세요')
    }
  };
  return (
    <div>
      <center>
        <h1>Sign In</h1>
        <br></br><br></br>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type='email' onChange={handleInputValue('email')} />
          </div>
          <br></br>
          <div>
            <span>비밀번호</span>
            <input
              type='password'
              onChange={handleInputValue('password')}
            />
          </div>
          <br></br><br></br><br></br><br></br>
          <Button variant="outline-secondary" className="loginButton" onClick={handleLogin}>
            로그인
          </Button>
          <br></br><br></br>
          <div>
            <Button variant="outline-secondary" className="loginButton" onClick={() => {
                navigate('/signup');}}>회원가입 하기</Button>
          </div>
          <div className='alert-box'>{errorMessage}</div>
        </form>
      </center>
    </div>
  );
}