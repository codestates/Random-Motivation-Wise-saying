import React from "react";
import "./PagesCss/Mypage.css";
import { Button } from "react-bootstrap";
import { userinfo } from '../dummy.js';
import { useNavigate } from "react-router";
export default function Mypage({/*userinfo,*/ handleLogout}) {
  const navigate = useNavigate();
  if(userinfo ===undefined){
    return null;
  }
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
        <Button variant="outline-secondary" className="logout-Button" onClick={() => {
                navigate('/edit_profile');}}>
          회원정보 수정
        </Button>
        <Button variant="outline-secondary" className="Edit-Button" onClick={handleLogout}>
          로그아웃
        </Button>
      </div>
    </div>
  );
}
