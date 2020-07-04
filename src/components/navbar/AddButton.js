import React from "react";
import { Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./AddButton.css";

export default function AddButton() {

  return (
    <>
      <Nav>
        <LinkContainer to="/add">
          <Nav.Link>
            <Button variant="outline-light" size="lg" className="align-me">Ajouter</Button>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </>
  );
}
