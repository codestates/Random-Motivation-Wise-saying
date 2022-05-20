import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import "./PagesCss/Main.css";
// import { randomSaying, userinfo } from '../dummy.js';
import axios from 'axios';

export default function Main() {
  const [WiseSaying, setWiseSaying] = useState('');
  const navigate = useNavigate();


  function randomList () {
    // setWiseSaying(randomSaying [Math.floor(Math.random() * randomSaying.length)])
    axios.get("http://localhost:8080/")
    .then((data) => {
      console.log(data)
      setWiseSaying(data.data.data)
    })
  }

  const addRandomSaying = async () => {
    
    const mydata = await axios.get('http://localhost:8080/users/auth');
    const myInfo = mydata.data.data.userInfo;
    console.log(myInfo)

    axios.get(`http://localhost:8080/myWiseSayings/${myInfo.id}/${WiseSaying.id}`
    );
  };




  return (
    <div className="maindiv">
      <>
        <center>
          <h1>Random Wise Saying</h1>
          <div className="random-Saying-box">
            <h4 className="Saying">명언</h4>
            <hr size="5" />
            <div className="random-Saying-List">
              {WiseSaying.script}
            </div>
            <h4>위인 이름</h4>
            <hr size="5" />
            <div className="random-Saying-greatman">{WiseSaying.talker}</div>
          </div>
        </center>
        <div className="Mypage-Button">
          <Button variant="outline-primary" className="Wise-Saying-add" onClick={addRandomSaying}>
            랜덤명언 추가
          </Button>
          <Button variant="outline-primary" className="Another-Saying" onClick={randomList}>
            다른 랜덤명언 보기
          </Button>
        </div>
        <div className="login">
          <Button variant="outline-secondary" className="loginButton" onClick={() => {
                navigate('/login');
              }}>
            로그인
          </Button>
        </div>
      </>
    </div>
  );
}
