import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MainLayout } from "../components/layout/MainLayout";

const Registration = () => {
  return (
    <MainLayout>
      <Container>
        <Row className="mt-4">
          <Col className=" bg-primary p-5 rounded d-flex justify-content-center align-items-center">
            <div className="text-light ">
              <h2 className="p-3">Welcome to our system</h2>
              <p>You can manage your financial with our system</p>
            </div>
          </Col>
          <Col>
            <Form>
              <h2>Register</h2>
              <hr />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Registration;
