import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Add.css";

export default function Add() {

  return (
    <>
      <Nav>
        <LinkContainer to="/">
          <Nav.Link>
            <Button variant="outline-light" size="lg" className="align-me">Ajouter</Button>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </>
  );
}
