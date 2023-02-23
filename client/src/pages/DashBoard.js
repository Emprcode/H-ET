import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomTable } from "../components/customFields/CustomTable";
import { addTrans } from "../components/helper/axiosHelper";
import { MainLayout } from "../components/layout/MainLayout";
import { toast } from "react-toastify";

const DashBoard = () => {
  const [trans, setTrans] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTrans({
      ...trans,
      [name]: value,
    });
  };

  const handleOnAdd = async (e) => {
    e.preventDefault();
    const { status, message } = await addTrans(trans);
    toast[status](message);
  };
  return (
    <MainLayout>
      {/* form */}
      <Container className="mt-5">
        <Form onSubmit={handleOnAdd}>
          <h3>Transaction Form</h3>
          <Row>
            <Col>
              <Form.Control
                placeholder="Name"
                onChange={handleOnChange}
                name="name"
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Type"
                name="type"
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Amount"
                name="amount"
                onChange={handleOnChange}
              />
            </Col>
            <Col className="d-grid">
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* table */}
      <Container className="table mt-5">
        {/* <CustomTable trans={trans} /> */}
      </Container>
    </MainLayout>
  );
};

export default DashBoard;
