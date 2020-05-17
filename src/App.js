import React from 'react';
import { Navbar, Container, Row } from "react-bootstrap";
import Routes from "./Routes";
import './App.css';
import Top from "./containers/Top";

function App() {

  return (
    <Container fluid>
      <Top />
      <Routes />
    </Container>
  );
}

export default App;
