import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import moment from 'moment'

export default function Today() {

  const [today, setDate] = useState(moment().format('DD/MM/YYYY : HH:mm:ss'));

  useEffect(() => {
    setInterval(() => {
      setDate(moment().format('DD/MM/YYYY : HH:mm:ss'))
    }, 1000);
  }, []);


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
