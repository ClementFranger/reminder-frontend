import React, { useState } from "react";
import { Card, Button, ListGroup, Navbar } from "react-bootstrap";
import Today from "../components/navbar/Today";

export default function Top() {

  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Today/>
      </Navbar>
    </>
  );
}
