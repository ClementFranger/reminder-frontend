import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup, Form } from "react-bootstrap";
import "./AddReminders.css";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import uuid from "uuid";

export default function AddReminders() {
  const history = useHistory();
  const [id, setId] = useState(uuid.v4());
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");
  const [start, setStart] = useState("");

  function validateForm() {
    return description.length > 0 &&  start.length > 0 && validateFrequency(frequency);
  }

  function validateFrequency(f) {
    return (f == parseInt(f) && f >= 0)
  }

  function handleSubmit() {
    createReminder({id, description, frequency, start})
    history.push("/");
  }

  function createReminder(reminder) {
    try {
      API.post("reminder", "/reminders", {body: reminder});
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control autoFocus value={description} onChange={e => setDescription(e.target.value)} size="lg"/>
        </Form.Group>
        <Form.Group controlId="frequency">
          <Form.Label>Fréquence (jours)</Form.Label>
          <Form.Control value={frequency} onChange={e => setFrequency(e.target.value)} size="lg"/>
        </Form.Group>
        <Form.Group controlId="start">
          <Form.Label>Début du reminder</Form.Label>
          <Form.Control value={start} placeholder="DD/MM/YYY" onChange={e => setStart(e.target.value)} size="lg"/>
        </Form.Group>
        <Button variant="outline-dark" disabled={!validateForm()} size="lg" className="align-me" type="submit">Ajouter</Button>
      </Form>
    </>
  );
}
