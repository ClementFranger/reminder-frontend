import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import moment from 'moment'
import localization from 'moment/locale/fr';

export default function Today() {

  const [today, setDate] = useState(moment().format('ll'));

  return (
    <>
      <Nav className="mr-lg-4">
        <LinkContainer to="/">
          <Nav.Link>{today}</Nav.Link>
        </LinkContainer>
      </Nav>
    </>
  );
}