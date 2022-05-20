import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './PagesCss/Edit_profile.css'
import { Button } from "react-bootstrap";

export default function EditProfile(props) {
  const [editInfo, setEditInfo] = useState({
    name: '',
    email: props.userinfo.email,
    password: '',
    newpassword:'',
    samepassword:''
  });
  const handleInputValue = (key) => (e) => {
    setEditInfo({ ...editInfo, [key]: e.target.value });
  };
  const navigate= useNavigate();
  const handleEdit = () => {
    
    if(editInfo.name !=='' && editInfo.password !== '' && editInfo.newpassword !== '' && editInfo.samepassword !==''){
      axios.post('http://localhost:8080/users/editprofile',{
        name: editInfo.name,
        password: editInfo.newpassword,
        email: editInfo.email,
      }).then((result)=> console.log(result))
      navigate('/mypage')
    }
  };
  //console.log(editInfo)
  return (
    <div>
      <center className="Myinfo">
        <h3>회원정보 수정</h3>
        <hr size="5" />
        <div className="Myinfo-name Myinfo-box">이름 : <input type="text" onChange={handleInputValue('name')} /> </div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          e-mail : {props.userinfo.email}
        </div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          현재 비밀번호 : <input type="password" onChange={handleInputValue('password')} />
          <span></span>
        </div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          비밀번호 수정 : <input type="password" onChange={handleInputValue('newpassword')} />
        </div>
        <hr />
        <div className="Myinfo-email Myinfo-box">
          비밀번호 수정확인 : <input type="password" onChange={handleInputValue('samepassword')} />
        </div>
        <hr />
        <div>
        <Button variant="outline-primary" className='edit-button' onClick={handleEdit}  >
          회원정보 수정하기
        </Button>
        
        </div>
      </center>
    </div>
  )
}