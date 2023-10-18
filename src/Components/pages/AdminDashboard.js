import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoProject } from "react-icons/go";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Revenue",
    },
  },
};
export const optionsLine = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sales Overview",
    },
  },
};

const labels = ["2023", "2024", "2025", "2026", "2027", "2028", "2029"];

export const dataBar = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [100, 85, 75, 65, 55, 75, 85],
      backgroundColor: "#ccfeff",
    },
    {
      label: "Outcome",
      data: [100, 85, 75, 65, 55, 75, 85],
      backgroundColor: "#00d4ff",
    },
  ],
};
export const dataLine = {
  labels,
  datasets: [
    {
      label: "Total Sales",
      data: [80, 70, 65, 55, 45, 55, 75],
      borderColor: "#00d4ff",
      backgroundColor: "#ccfeff",
    },
    {
      label: "Total Revenue",
      data: [100, 85, 75, 65, 55, 75, 85],
      borderColor: "#ccfeff",
      backgroundColor: "#00d4ff",
    },
  ],
};

const AdminDashboard = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column flex-wrap-wrap justify-content-between "
      >
        <Row className="d-flex flex-row mt-3">
          <Col>
            <h4>Welcome Admin!</h4>
            <p>Dashboard</p>
          </Col>
        </Row>
        <Row
          className="d-flex flex-sm-column flex-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row justify-content-between flex-wrap flex-md-row"
          style={{ marginRight: "6px" }}
        >
          <Col
            className="rounded  d-flex flex-row justify-content-between align-items-center text-center flex-wrap"
            style={{
              margin: "10px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            }}
          >
            <Row
              className=""
              style={{
                backgroundColor: "#ccfeff",
                margin: "10px",
                padding: "10px",
                borderRadius: "200px",
              }}
            >
              <GoProject
                className="p-0"
                size={30}
                style={{ margin: "0px", color: "#00d4ff" }}
              />
            </Row>
            <Row className="text-end pt-2">
              <h5
                className=""
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                92
              </h5>
              <p style={{ fontSize: "14px", fontWeight: "bolder" }}>Projects</p>
            </Row>
          </Col>
          <Col
            className="rounded  d-flex flex-row justify-content-between align-items-center text-center flex-wrap"
            style={{
              margin: "10px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            }}
          >
            <Row
              className=""
              style={{
                backgroundColor: "#ccfeff",
                margin: "10px",
                padding: "10px",
                borderRadius: "200px",
              }}
            >
              <AiOutlineUsergroupAdd
                className="p-0"
                size={30}
                style={{ margin: "0px", color: "#00d4ff" }}
              />
            </Row>
            <Row className="text-end pt-2">
              <h5
                className=""
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                132
              </h5>
              <p style={{ fontSize: "14px", fontWeight: "bolder" }}>Clients</p>
            </Row>
          </Col>
          <Col
            className="rounded  d-flex flex-row justify-content-between align-items-center text-center flex-wrap"
            style={{
              margin: "10px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            }}
          >
            <Row
              className=""
              style={{
                backgroundColor: "#ccfeff",
                margin: "10px",
                padding: "10px",
                borderRadius: "200px",
              }}
            >
              <BiTask
                className="p-0"
                size={30}
                style={{ margin: "0px", color: "#00d4ff" }}
              />
            </Row>
            <Row className="text-end pt-2">
              <h5
                className=""
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                32
              </h5>
              <p style={{ fontSize: "14px", fontWeight: "bolder" }}>Tasks</p>
            </Row>
          </Col>
          <Col
            className="rounded  d-flex flex-row justify-content-between align-items-center text-center flex-wrap"
            style={{
              margin: "10px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            }}
          >
            <Row
              className=""
              style={{
                backgroundColor: "#ccfeff",
                margin: "10px",
                padding: "10px",
                borderRadius: "200px",
              }}
            >
              <AiOutlineUser
                className="p-0"
                size={30}
                style={{ margin: "0px", color: "#00d4ff" }}
              />
            </Row>
            <Row className="text-end pt-2">
              <h5
                className=""
                style={{ fontSize: "25px", fontWeight: "bolder" }}
              >
                30
              </h5>
              <p style={{ fontSize: "14px", fontWeight: "bolder" }}>
                Employees
              </p>
            </Row>
          </Col>
        </Row>
        <Row
          className="d-flex flex-sm-column mt-6 flex-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row justify-content-between flex-wrap flex-md-row align-items-center overflow-hidden"
          style={{ }}
        >
          <Col className="rounded  ">
            <Bar
              options={optionsBar}
              data={dataBar}
              style={{
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              }}
            />
          </Col>
          <Col
            className="rounded "
            style={{
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
            }}
          >
            <Line options={optionsLine} data={dataLine} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
