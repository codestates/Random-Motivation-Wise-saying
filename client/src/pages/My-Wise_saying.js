import {React, useState} from "react";
import { randomSaying } from '../dummy.js';
import './PagesCss/My-Wise_saying.css'
import { Button } from "react-bootstrap";

export default function MyWiseSaying() {
  const [WiseSaying, setWiseSaying] = useState(randomSaying[Math.floor(Math.random() * randomSaying.length)]);

  function randomList () {
    setWiseSaying(randomSaying[Math.floor(Math.random() * randomSaying.length)])
  }

  return (
    <div>
      <center>
          <h3>My Random Wise Saying</h3>
          <div className="My-random-Saying-box">
            <h4 className="My-Saying">명언</h4>
            <hr size="5" />
            <div className="My-random-Saying-List">
            {WiseSaying.random}
            </div>
            <h4>위인 이름</h4>
            <hr size="5" />
            <div className="My-random-Saying-greatman">{WiseSaying.name}</div>
          </div>
          <h3 className='listName'>명언 리스트</h3>
        </center>

        
        <div className='list-box'>
          <div className='list-box-ul'>
          <ul>
          {randomSaying.map((data) =>
          <li key={data.id}>
              <input type="checkbox" className='List-input' />
                <div>{data.random}</div>
                <div>{data.name}</div>
                <hr />
          </li>
            )}
          </ul>
          </div>
            <div>
          <div className='modify-List'>
            <div><span className='spanName spanBox'>위인 이름</span> <span className='spanBox'>명언</span></div>
            <input type="text" />
            <input type="text" />
          </div>
          <div className='modify-Button-Box'>
          <Button variant="outline-primary" className='modify-Buttons'>수정</Button>
          <Button variant="outline-primary" className='modify-Buttons'>삭제</Button>
          </div>
          </div>
          <Button variant="outline-primary" className="My-Another-Saying" onClick={randomList}>
            다른 랜덤명언 보기
          </Button>
        </div>
    </div>
  );
}
