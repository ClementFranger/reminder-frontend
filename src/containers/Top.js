import React from "react";
import { Navbar } from "react-bootstrap";
import Today from "../components/navbar/Today";
import AddButton from "../components/navbar/AddButton";

export default function Top() {

  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-between" collapseOnSelect>
        <Today/>
        <AddButton/>
      </Navbar>
    </>
  );
}
