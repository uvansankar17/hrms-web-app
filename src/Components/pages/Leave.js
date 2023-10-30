import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import LEAVE_DATA from "./Table/LEAVE_DATA.json";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Employee.css";
import BasicTable from "./Table/BasicTable";
import Header from "../Header";
import DeleteModel from "../DeleteModel";

const Leave = () => {
  const navigate = useNavigate();
  const handleNavigateAddForm = () => navigate("/leaveAddForm");
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
      accessor: 'Id'
  },
  {
      Header: 'NAME',
      accessor: 'Name'
  },
  {
      Header: 'ROLE',
      accessor: 'Role'
  },
  {
      Header: 'START DATE',
      accessor: 'Start Date'
  },
  {
      Header: 'END DATE',
      accessor: 'End Date'
  },
  {
      Header: 'STATUS',
      accessor: 'Status'
  },
  {
      Header: 'REASON',
      accessor: 'Reason'
  },
    {
      Header: 'ACTIONS',
      accessor: 'action',
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to="/leaveEditForm">
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
            HEADING="Leave"
            BUTTON_NAME="Add Leave"
          />
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={LEAVE_DATA} />
        </Row>
      </Container>
      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Leave"
        DELETETITLE="Leave"
      />
    </div>
  );
};

export default Leave;
