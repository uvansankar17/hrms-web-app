import React, { useMemo, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'


const UserReport = () => {
  
  return (
    <>
    <Container fluid className='d-flex flex-column'>
      <Row className='d- flex flex-column mt-2 mb-4'>
        <h5>User Report</h5>
        <span className='text-secondary'>Report/User Report</span>
      </Row>
      <Row className=''>
      <Form className="d-flex flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column">
          
          <Col className='m-4'>
          <Form.Select placeholder="Employee Designation"  className="">
            <option disabled selected>
              User Role
            </option>
            <option>FrontEnd Developer</option>
            <option>BackEnd Developer</option>
          </Form.Select>
          </Col>
          <Col className='d-flex flex-column text-center m-4'>
          <Button
            className=" text-dark fw-bold "
            style={{
              backgroundColor: "#00d4ff",
              outline: "none",
              border: "none",
            }}
          >
            Search
          </Button>
          </Col>
        </Form>
      </Row>
      <Row>
        
      </Row>
    </Container>
    </>
  )
}

export default UserReport
