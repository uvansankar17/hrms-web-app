import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import TRAINING_DATA from "./Table/TRAINING_DATA.json";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BasicTable from "./Table/BasicTable";
import Header from "../Header";
import DeleteModel from "../DeleteModel";

const Training = () => {
  const navigate = useNavigate();
  const handleNavigateAddForm = () => navigate("/trainingAddForm");
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
      Header: "TRAINING TYPE",
      accessor: "training_type",
    },

    {
      Header: "EMPLOYEE",
      accessor: "employee",
    },
    {
      Header: "TRAINER",
      accessor: "trainer",
    },
    {
      Header: "TIME DURATION",
      accessor: "time_duration",
    },
    {
      Header: "DESCRIPTION",
      accessor: "description",
    },
    {
      Header: "COST",
      accessor: "cost",
    },
    {
      Header: "STATUS",
      accessor: "status",
    },
    {
      Header: "ACTION",
      accessor: "action",
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={"/trainingEditForm"}>
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
    <>
      <Container fluid className="">
        <Row>
          <Header
            ONCLICK={handleNavigateAddForm}
            HEADING="Training"
            BUTTON_NAME="Add Training"
          />
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={TRAINING_DATA} />
        </Row>
      </Container>
      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Training"
        DELETETITLE="Training"
      />
    </>
  );
};

export default Training;
