import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from "react-bootstrap";
axios.defaults.withCredentials = true;

export default function Signup () {
  const [userinfo, setuserinfo] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = () => {
    if(userinfo.email !== '' && userinfo.password !=='' && userinfo.name !==''){
      axios.post("https://localhost:4000/signup",{
        name:userinfo.name,
        email:userinfo.email,
        password:userinfo.password,
      })
      navigate('/login')
    }else{
      setErrorMessage('모든 항목은 필수입니다')
    }
  };
  return (
    <div>
      <center>
        <h1>Sign Up</h1>
        <br></br><br></br><br></br>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이름</span>
            <input type='text' onChange={handleInputValue('name')} />
          </div>
          <br></br><br></br>
          <div>
            <span>이메일</span>
            <input type='email' onChange={handleInputValue('email')} />
          </div>
          <br></br><br></br>
          <div>
            <span>비밀번호</span>
            <input
              type='password'
              onChange={handleInputValue('password')}
            />
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <Button
            variant="outline-secondary" className="loginButton"
            
            onClick={handleSignup}
          >
            회원가입
          </Button>
          <div className='alert-box'>{errorMessage}</div>
        </form>
      </center>
    </div>
  );
}