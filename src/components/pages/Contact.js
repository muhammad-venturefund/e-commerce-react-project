import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-heading">
        <Container>
          <h2>Contact Us</h2>
        </Container>
      </div>
      <Container>
        <div className="contact-container">
          <form action="https://formspree.io/f/mayzolor" method="POST">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="Email"
                autoComplete="off"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                name="Message"
                autoComplete="off"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
