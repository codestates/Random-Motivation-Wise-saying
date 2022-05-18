import React from "react";
import "./PagesCss/Mypage.css";
import { Button } from "react-bootstrap";
import { userinfo } from '../dummy.js';

export default function Mypage() {
  

  return (
    <div>
      <center className="Myinfo">
        <h1>Myinfo</h1>
        <hr size="5" />
        <div className="Myinfo-name Myinfo-box">이름 : {userinfo.name}</div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          e-mail : {userinfo.email}
        </div>
        <hr />
      </center>
      <div className="Mypage-Button">
        <Button variant="outline-secondary" className="logout-Button">
          회원정보 수정
        </Button>
        <Button variant="outline-secondary" className="Edit-Button">
          로그아웃
        </Button>
      </div>
    </div>
  );
}
