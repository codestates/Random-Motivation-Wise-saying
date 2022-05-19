import React from 'react';
import './PagesCss/Edit_profile.css'
import { Button } from "react-bootstrap";

export default function editProfile() {

  return (
    <div>
      <center className="Myinfo">
        <h3>회원정보 수정</h3>
        <hr size="5" />
        <div className="Myinfo-name Myinfo-box">이름 : <input type="text" /> </div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          e-mail : 
        </div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          현재 비밀번호 : <input type="password" />
        </div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          비밀번호 수정 : <input type="password" />
        </div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          비밀번호 수정확인 : <input type="password" />
        </div>
        <hr />
        <div>
        <Button variant="outline-primary" className='edit-button'>
          회원정보 수정하기
        </Button>
        </div>
      </center>
    </div>
  )
}