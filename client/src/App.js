import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Mypage from "./pages/Mypage";
import Main from "./pages/Main";
import MyWiseSaying from "./pages/My-Wise_saying";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Edit_profile from "./pages/Edit_profile"
import axios from "axios";

function App() {
  let navigate = useNavigate();
  /*const handleLogout =() =>{
    axios.post('http://localhost:8080/users/signout').then((res)=>{
      setUserinfo(null);
      setIsLogin(false);
      navigate('/')
    })
  }*/
  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="nav">
        <Container>
          <Navbar.Brand href="/">Random Sayings</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="my-Wise-saying"
              onClick={() => {
                navigate("/my-Wise-saying");
              }}
            >
              My wise saying
            </Nav.Link>
            <Nav.Link
              href="myPage"
              onClick={() => {
                navigate("/mypage");
              }}
            >
              My page
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage /*handleLogout={handleLogout}*/ />} />
        <Route path="/my-Wise-saying" element={<MyWiseSaying />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit_profile" element={<Edit_profile />} />
      </Routes>
    </div>
  );
}

export default App;
