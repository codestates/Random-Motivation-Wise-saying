import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Mypage from "./pages/Mypage";
import Main from "./pages/Main";
import MyWiseSaying from "./pages/My-Wise_saying";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="nav">
        <Container>
          <Navbar.Brand href="home">Random Sayings</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="home"
              onClick={() => {
                navigate("/home");
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
        <Route path="/home" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/my-Wise-saying" element={<MyWiseSaying />} />
      </Routes>
    </div>
  );
}

export default App;
