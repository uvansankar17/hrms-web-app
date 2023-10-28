import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import EMPLOYEES_DATA from "./Table/EMPLOYEES_DATA.json";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Employee.css";
import BasicTable from "./Table/BasicTable";
import Header from "../Header";
import DeleteModel from "../DeleteModel";

const Employee = () => {
  const navigate = useNavigate();
  const handleShow = () => navigate("/employeeAddForm");
  const [deleteShow, setDeleteShow] = useState(false);

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
      Header: "EMPLOYEES",
      accessor: "employees",
    },
    {
      Header: "EMPLOYEES ID",
      accessor: "employee_id",
    },
    {
      Header: "EMAIL",
      accessor: "email",
    },
    {
      Header: "MOBILE",
      accessor: "mobile",
    },
    {
      Header: "JOIN DATE",
      accessor: "join_date",
    },
    {
      Header: "ROLE",
      accessor: "role",
    },
    {
      Header: "ACTION",
      accessor: "action",
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to="/employeeEditForm">
            <Button variant="warning">
              <FaEdit />
            </Button>
          </Link>
          <Button variant="danger" className="m-1" onClick={deleteHandleShow}>
            <MdDelete />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Container fluid className="">
        <Row>
          <Header
            ONCLICK={handleShow}
            HEADING="All Employees"
            BUTTON_NAME="Add Employee"
          />
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={EMPLOYEES_DATA} />
        </Row>
      </Container>
      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="All Employees"
        DELETETITLE="Employee"
      />
    </div>
  );
};

export default Employee;
