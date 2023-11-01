import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import {  Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Modal } from "react-bootstrap";
import Header from "../Header";
import DeleteModel from "../DeleteModel";
import BasicTable from "./Table/BasicTable";
import DESIGNATION_DATA from './Table/DESIGNATION_DATA.json'

const Designation = () => {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const addHandleClose = () => {
    setAddShow(false);
  };
  const addHandleShow = () => {
    setAddShow(true);
  };
  const editHandleClose = () => {
    setEditShow(false);
  };
  const editHandleShow = () => {
    setEditShow(true);
  };
  const deleteHandleClose = () => {
    setDeleteShow(false);
  };
  const deleteHandleShow = () => {
    setDeleteShow(true);
  };
  const COLUMNS = [
    {
      Header: "#",
      accessor: "id",
    },
    {
      Header: "DESIGNATION",
      accessor: "designation",
    },
    {
      Header: "DEPARTMENT",
      accessor: "department",
    },
   
    {
      Header: "ACTION",
      accessor: "action",
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          
            <Button variant="warning" onClick={editHandleShow}>
              <FaEdit />
            </Button>
         
          <Button variant="danger" className="m-1" onClick={deleteHandleShow}>
            <MdDelete />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <Container fluid className="overflowX-hidden">
        <Row>
          <Header
            ONCLICK={addHandleShow}
            HEADING="Designation List"
            BUTTON_NAME="Designation"
          />
        </Row>

        <Row >
        <BasicTable COLUMNS={COLUMNS} MOCK_DATA={DESIGNATION_DATA} />
        </Row>
      </Container>

      {/* Models */}

      {/* AddModel */}

      <Modal show={addShow} onHide={addHandleClose} centered>
        <Modal.Header  closeButton>
          <Modal.Title>Add Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group>
              <Form.Label>Designation Name*</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Department*</Form.Label>
              <Form.Select>
                <option>FrontEnd Developer</option>
                <option>BackEndDeveloper</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addHandleClose}>
            Add
          </Button>
          <Button variant="secondary" onClick={addHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Model */}

      <Modal show={editShow} onHide={editHandleClose} centered>
        <Modal.Header  closeButton>
          <Modal.Title>Edit Designation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Designation Name*</Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Department*</Form.Label>
              <Form.Select>
                <option>FrontEnd Developer</option>
                <option>BackEndDeveloper</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={editHandleClose}>
            Update
          </Button>
          <Button variant="secondary" onClick={editHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Model */}

      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Designation"
        DELETETITLE="Designation"
      />
    </>
  );
};

export default Designation;
