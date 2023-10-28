import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BasicTable from "./Table/BasicTable";
import LEAVEREPORT_DATA from "../pages/Table/LEAVEREPORT_DATA.json";

const LeaveReport = () => {
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
      Header: "DEPARTMENT",
      accessor: "department",
    },
    {
      Header: "LEAVE TYPE",
      accessor: "leave_type",
    },
    {
      Header: "NO. OF DAYS",
      accessor: "no_of_days",
    },
    {
      Header: "REMAINING LEAVE",
      accessor: "remaining_leave",
    },
    {
      Header: "TOTAL LEAVE",
      accessor: "total_leave",
    },
    {
      Header: "TOTAL LEAVE TAKEN",
      accessor: "total_leave_taken",
    },
    {
      Header: "LEAVE CARRY FORWARD",
      accessor: "leave_carry_forward",
    },
  ];

  return (
    <>
      <Container>
        <Row className="d- flex flex-row mt-2 mb-4 align-items-center">
          <Col className="d-flex flex-column justify-content-start">
            <h5>Leave Report</h5>
            <span className="text-secondary">Report/Leave Report</span>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button variant="warning">Pdf</Button>
          </Col>
        </Row>
        <Row className="">
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={LEAVEREPORT_DATA} />
        </Row>
      </Container>
    </>
  );
};

export default LeaveReport;
