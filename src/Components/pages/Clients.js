import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import CLIENT_DATA from "./Table/CLIENT_DATA.json";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Employee.css";
import BasicTable from "./Table/BasicTable";
import Header from "../Header";
import DeleteModel from "../DeleteModel";

const Clients = () => {
  const navigate = useNavigate();
  const handleNavigateAddForm = () => navigate("/clientAddForm");
  const [deleteShow, setDeleteShow] = useState(false);

  const deleteHandleClose = () => {
    setDeleteShow(false);
  };

  const deleteHandleShow = () => {
    setDeleteShow(true);
  };

  const COLUMNS = [
    {
      Header: '#',
      accessor: 'id'
    },
    {
      Header: 'NAME',
      accessor: 'first_name'
    },
    {
      Header: 'EMAIL',
      accessor: 'email'
    },
    {
      Header: 'COMPANY NAME',
      accessor: 'company name'
    },
    {
      Header: 'MOBILE NO.',
      accessor: 'phone number'
    },
    {
      Header: 'STATE',
      accessor: 'state'
    },
    {
      Header: 'ACTIONS',
      accessor: 'action',
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to="/clientEditForm">
            <Button variant="warning">
              <FaEdit />
            </Button>
          </Link>
          <Button variant="danger" className="m-1" onClick={deleteHandleShow}>
            <MdDelete />
          </Button>
        </div>
      )
    }
  ];

  return (
    <div>
      <Container fluid className="">
        <Row>
          <Header
            ONCLICK={handleNavigateAddForm}
            HEADING="Clients"
            BUTTON_NAME="Add Client"
          />
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={CLIENT_DATA} />
        </Row>
      </Container>
      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Clients"
        DELETETITLE="Client"
      />
    </div>
  );
};

export default Clients;
