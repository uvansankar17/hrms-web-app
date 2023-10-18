import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const TimeSheet = () => {
 const naviagte = useNavigate();
  const handleShow = () => naviagte("/timeSheetAddForm");
  return (
    <div>
      <Container fluid>
      <Row className="d-flex  flex-row  justify-content-between align-items-center mt-2">
        <Col className="d-flex  flex-column flex-wrap-wrap align-content-center ">
          <h5>TimeSheet</h5>
          
        </Col>
        <Col className="d-flex  flex-row flex-wrap-wrap justify-content-end align-items-center">
        <Button
            variant="success"
            className="d-lg-none d-xxl-none d-flex d-sm-flex d-md-flex rounded"
            size="sm"
            onClick={handleShow}
          >
            <FaPlus className="m-2" />
            
          </Button>
          <Button
            variant="success"
            className="d-lg-block d-xxl-block d-none d-sm-none rounded"
            size="sm"
            onClick={handleShow}
          >
            <FaPlus className="m-2" />
            Add Work Time
          </Button>
        </Col>
      </Row>
        <Row className='mt-2'>

        </Row>
      </Container>

    </div>
  )
}

export default TimeSheet
