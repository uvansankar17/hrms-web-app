import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import TIMESHEET_DATA from "./Table/TIMESHEET_DATA.json";
import BasicTable from "./Table/BasicTable";
import DeleteModel from "../DeleteModel";
import Header from "../Header";

const TimeSheet = () => {
  const naviagte = useNavigate();
  const handleShow = () => naviagte("/timeSheetAddForm");
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
      Header: "EMPLOYEE",
      accessor: "employee",
    },
    {
      Header: "DATE",
      accessor: "date",
    },
    {
      Header: "PROJECT",
      accessor: "project",
    },
    {
      Header: "ASSIGNED HOURS",
      accessor: "assigned_hour",
    },
    {
      Header: "HOURS",
      accessor: "hours",
    },
    {
      Header: "DESCRIPTION",
      accessor: "description",
    },
    {
      Header: "ACTION",
      accessor: "action",
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={"/timeSheetEditForm"}>
            <Button variant="warning">
              <FaEdit />
            </Button>
          </Link>
          <Button
            variant="danger"
            className="m-1"
            onClick={() => deleteHandleShow()}
          >
            <MdDelete />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Container fluid>
        <Row>
          <Header
            ONCLICK={handleShow}
            HEADING="Time Sheet"
            BUTTON_NAME="Add Work Time"
          />
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={TIMESHEET_DATA} />
        </Row>
      </Container>
      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Time Sheet"
        DELETETITLE="Day"
      />
    </div>
  );
};

export default TimeSheet;
