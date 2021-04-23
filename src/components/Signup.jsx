import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Email</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="conf_password">
              <Form.Label>Email</Form.Label>
              <Form.Control type="password" ref={confPasswordRef} required />
            </Form.Group>

            <Form.Group>
              <Button type="submit" className="w-100">
                Sign Up
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
};

export default Signup;
