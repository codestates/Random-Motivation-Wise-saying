import {React, useState} from "react";
import { randomSaying } from '../dummy.js';
import './PagesCss/My-Wise_saying.css'
import { Button } from "react-bootstrap";
import axios from 'axios';

export default function MyWiseSaying() {
  const [myWiseSaying, setmyWiseSaying] = useState('');
  const [userId, setUserId] = useState('');
  const [patchList, setPatchList] = useState({
    script: '',
    talker: ''
  });


  const myRandomList = async () => {
    const mydata = await axios.get('http://localhost:8080/users/auth');
    const myInfo = mydata.data.data.userInfo;
    setUserId(myInfo.id)
    axios.get(`http://localhost:8080/${myInfo.id}`)
    .then(data => {
      setmyWiseSaying(data.data.data)
    });
  };

  const handleInputValue = (key) => (e) => {
    setPatchList({ ...patchList, [key]: e.target.value });
  };

  // const patchMyList = () => {
  //   axios.patch(`http://localhost:8080/`,{
  //     parms: {
  //       userId: userId,
  //       wiseSayingId: myWiseSaying.id
        
  //     },
  //      body:{ script: patchList.script,
  //       talker: patchList.talker,
  //      }
  //   })
  //   .then(data => {
  //     console.log(data)
  //   })
  // };

  return (
    <div>
      <center>
          <h3>My Random Wise Saying</h3>
          <div className="My-random-Saying-box">
            <h4 className="My-Saying">명언</h4>
            <hr size="5" />
            <div className="My-random-Saying-List">
            {myWiseSaying.script}
            </div>
            <h4>위인 이름</h4>
            <hr size="5" />
            <div className="My-random-Saying-greatman">{myWiseSaying.talker}</div>
          </div>
          <Button variant="outline-primary" className="My-Another-Saying" onClick={myRandomList}>
            다른 랜덤명언 보기
          </Button>
        </center>
        {/* <div className='list-box'>
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
            <input type="text" onChange={handleInputValue('talker')} />
            <input type="text" onChange={handleInputValue('script')} />
          </div>
          <div className='modify-Button-Box'>
          <Button variant="outline-primary" className='modify-Buttons' onClick={patchMyList}>수정</Button>
          <Button variant="outline-primary" className='modify-Buttons'>삭제</Button>
          </div>
          </div>
          
        </div> */}
    </div>
  );
}
