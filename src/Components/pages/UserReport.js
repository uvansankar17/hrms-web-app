import React from "react";
import { Container, Row } from "react-bootstrap";
import USERREPORT_DATA from "../pages/Table/USERREPORT_DATA.json";
import BasicTable from "./Table/BasicTable";

const UserReport = () => {
  const COLUMNS = [
    {
      Header: "#",
      accessor: "id",
    },
    {
      Header: "NAME",
      accessor: "Name",
    },
    {
      Header: "COMPANY",
      accessor: "company",
    },
    {
      Header: "EMAIL",
      accessor: "email",
    },
    {
      Header: "ROLE",
      accessor: "role",
    },
    {
      Header: "DESIGNATION",
      accessor: "designation",
    },
    {
      Header: "STATUS",
      accessor: "status",
    },
  ];

  return (
    <>
      <Container fluid className="d-flex flex-column">
        <Row className="d- flex flex-column mt-2 mb-4">
          <h5>User Report</h5>
          <span className="text-secondary">Report/User Report</span>
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={USERREPORT_DATA} />
        </Row>
      </Container>
    </>
  );
};

export default UserReport;
