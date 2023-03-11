import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import firebase from "../firebase";
const Heading = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (window.confirm("정말로 로그아웃 하시겠습니까?")) {
      firebase.auth().signOut();
      navigate("/");
    }
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                paddingRight: "10px",
              }}
            >
              List
            </Link>
            <Link
              to="/upload"
              style={{
                paddingRight: "10px",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Upload
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {user.accessToken ? (
            <>
              <Link
                to="/mypage"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                MyPage
              </Link>
              <div
                type="button"
                onClick={() => {
                  logoutHandler();
                }}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Logout
              </div>
            </>
          ) : (
            <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
              Login
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Heading;
