import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ATTENDANCEREPORT_DATA from "../pages/Table/ATTENDEANCEREPORT_DATA.json";

import BasicTable from "./Table/BasicTable";

const AttendanceReport = () => {
  const COLUMNS = [
    {
      Header: "#",
      accessor: "id",
    },
    {
      Header: "DATE",
      accessor: "date",
    },
    {
      Header: "CHECK IN",
      accessor: "check_in",
    },
    {
      Header: "CHECK OUT",
      accessor: "check_out",
    },
    {
      Header: "WORK STATUS",
      accessor: "work_status",
    },
  ];

  return (
    <>
      <Container>
        <Row className="d- flex flex-row mt-2 mb-4">
          <Col className="d-flex justify-content-start">
            <h5>Attendance Report</h5>
          </Col>
        </Row>

        <Row>
          <BasicTable COLUMNS={COLUMNS} MOCK_DATA={ATTENDANCEREPORT_DATA} />
        </Row>
      </Container>
    </>
  );
};

export default AttendanceReport;
