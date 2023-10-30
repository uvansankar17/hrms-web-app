import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import TICKET_DATA from "./Table/TICKET_DATA.json";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BasicTable from "./Table/BasicTable";
import Header from "../Header";
import DeleteModel from "../DeleteModel";

const Tickets = () => {
  const navigate = useNavigate();
  const [deleteShow, setDeleteShow] = useState(false);
  const deleteHandleClose = () => {
    setDeleteShow(false);
  };
  const deleteHandleShow = () => {
    setDeleteShow(true);
  };
  const handleNavigateAddForm = () => navigate("/ticketAddForm");

  const COLUMNS = [
    {
      Header: "#",
      accessor: "id",
    },
    {
      Header: "PROJECT NAME",
      accessor: "project",
    },
    {
      Header: "TICKET ID",
      accessor: "ticket_id",
    },
    {
      Header: "ASSIGN TO",
      accessor: "assign_to",
    },
    {
      Header: "TICKET FOLLOWERS",
      accessor: "ticket_follower",
    },
    {
      Header: "CLIENT",
      accessor: "client",
    },
    {
      Header: "CREATED DATE",
      accessor: "create_date",
    },
    {
      Header: "PRIORITY",
      accessor: "priority",
    },
    {
      Header: "STATUS",
      accessor: "status",
    },

    {
      Header: "DESCRIPTION",
      accessor: "description",
    },
    {
      Header: "ATTACHMENT",
      accessor: "attachment",
    },
    {
      Header: "ACTION",
      accessor: "action",
      Cell: () => (
        <div className="d-flex align-items-center justify-content-center flex-row">
          <Link to={"/ticketEditForm"}>
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
            HEADING="Tickets"
            BUTTON_NAME="Add Ticket"
          />
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={TICKET_DATA} />
        </Row>
      </Container>
      <DeleteModel
        DELETESTATE={deleteShow}
        ONCLICK={deleteHandleClose}
        DESCRIPTION="Tickets"
        DELETETITLE="Ticket"
      />
    </>
  );
};

export default Tickets;
