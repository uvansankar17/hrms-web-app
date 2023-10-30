import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import ATTENDANCE_DATA from "./Table/ATTENDANCE_DATA.json";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Employee.css";
import BasicTable from "./Table/BasicTable";
import Header from "../Header";
import DeleteModel from "../DeleteModel";

const Attendance = () => {
  const navigate = useNavigate();
  const handleNavigateAddForm = () => navigate("/attendanceAddForm");
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
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "TEAM",
      accessor: "team",
    },
    {
      Header: "DATE",
      accessor: "date",
    },
    {
      Header: "PUNCH IN",
      accessor: "punchin",
    },
    {
      Header: "PUNCH OUT",
      accessor: "punchout",
    },
    {
      Header: "PRODUCTION",
      accessor: "production",
    },
    {
      Header: "BREAK",
      accessor: "break",
    },
    {
      Header: "OVER TIME",
      accessor: "overtime",
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to="/attendanceEditForm">
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
            HEADING="Attendance"
            BUTTON_NAME="Add Attendance"
          />
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={ATTENDANCE_DATA} />
        </Row>
      </Container>
      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Attendance"
        DELETETITLE="Attendance"
      />
    </div>
  );
};

export default Attendance;
