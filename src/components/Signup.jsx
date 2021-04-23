import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContexts";
const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confPasswordRef.current.value) {
      setError("Password do not match");
      return;
    }

    try {
      setError("");
      setLoading(true);

      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError(`Failed to signup ${setError(error.message)}`);
    }

    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
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
              <Button type="submit" className="w-100" disabled={loading}>
                Sign Up
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
