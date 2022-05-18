import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./PagesCss/Main.css";
import { randomSaying } from '../dummy.js';
import axios from 'axios';

export default function Main() {
  const [WiseSaying, setWiseSaying] = useState(randomSaying [Math.floor(Math.random() * randomSaying.length)]);
  
  function randomList () {
    setWiseSaying(randomSaying [Math.floor(Math.random() * randomSaying.length)])
  }

  return (
    <div className="maindiv">
      <>
        <center>
          <h1>Random Wise Saying</h1>
          <div className="random-Saying-box">
            <h4 className="Saying">명언</h4>
            <hr size="5" />
            <div className="random-Saying-List">
              {WiseSaying.random}
            </div>
            <h4>위인 이름</h4>
            <hr size="5" />
            <div className="random-Saying-greatman">{WiseSaying.name}</div>
          </div>
        </center>
        <div className="Mypage-Button">
          <Button variant="outline-primary" className="Wise-Saying-add">
            랜덤명언 추가
          </Button>
          <Button variant="outline-primary" className="Another-Saying" onClick={randomList}>
            다른 랜덤명언 보기
          </Button>
        </div>
        <div className="login">
          <Button variant="outline-secondary" className="loginButton">
            로그인
          </Button>
        </div>
      </>
    </div>
  );
}
