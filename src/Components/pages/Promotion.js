import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PROMOTION_DATA from "./Table/PROMOTION_DATA.json";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BasicTable from "./Table/BasicTable";
import Header from "../Header";
import DeleteModel from "../DeleteModel";

const Promotion = () => {
  const navigate = useNavigate();
  const [deleteShow, setDeleteShow] = useState(false);
  const deleteHandleClose = () => {
    setDeleteShow(false);
  };
  const deleteHandleShow = () => {
    setDeleteShow(true);
  };
  const handleShow = () => navigate("/promotionAddForm");

  const COLUMNS = [
    {
      Header: "#",
      accessor: "id",
    },
    {
      Header: "PROMOTED EMPLOYEE",
      accessor: "promoted_employee",
    },
    {
      Header: "DEPARTMENT",
      accessor: "department",
    },
    {
      Header: "PROMOTION FROM",
      accessor: "promotion_from",
    },
    {
      Header: "PROMOTION TO",
      accessor: "promotion_to",
    },
    {
      Header: "PROMOTION DATE",
      accessor: "promotion_date",
    },
    {
      Header: "ACTION",
      accessor: "action",
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={"/promotionEditForm"}>
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
            ONCLICK={handleShow}
            HEADING="Promotion"
            BUTTON_NAME="Add Promotion"
          />
        </Row>

        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={PROMOTION_DATA} />
        </Row>
      </Container>
      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Promotion"
        DELETETITLE="Promotion"
      />
    </>
  );
};

export default Promotion;
