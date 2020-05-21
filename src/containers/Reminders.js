import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import "./Reminders.css";
import { API } from "aws-amplify";

export default function Reminders() {

  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    async function loadReminders() {
      const reminders = await getReminders();
      setReminders(reminders)
    }

    loadReminders()
    setInterval(() => {
      loadReminders()
    }, 3600000);

  }, []);

  function getReminders() {
    return API.get("reminder", "/reminders/today");
  }

  function renderReminders() {
    return reminders.map((reminder, i) =>
      <ListGroup.Item key={reminder.id}>
        {reminder.description}
      </ListGroup.Item>
    );
  }

  return (
    <>
      <ListGroup>
        {renderReminders()}
      </ListGroup>
    </>
  );
}
