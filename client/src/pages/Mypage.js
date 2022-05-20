import React from "react";
import "./PagesCss/Mypage.css";
import { Button } from "react-bootstrap";

import { useNavigate } from "react-router";
export default function Mypage(props) {
  const navigate = useNavigate();
  //console.log(props)
  return (
    <div>
      <center className="Myinfo">
        <h1>Myinfo</h1>
        <hr size="5" />
        <div className="Myinfo-name Myinfo-box">이름 : {props.userinfo.name}</div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          e-mail : {props.userinfo.email}
        </div>
        <hr />
      </center>
      <div className="Mypage-Button">
        <Button variant="outline-secondary" className="logout-Button" onClick={() => {
                navigate('/edit_profile');}}>
          회원정보 수정
        </Button>
        <Button variant="outline-secondary" className="Edit-Button" onClick={props.handleLogout}>
          로그아웃
        </Button>
      </div>
    </div>
  );
}
