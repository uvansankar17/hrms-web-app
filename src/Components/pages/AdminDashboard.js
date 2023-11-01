import React from "react";
import { Container, Row, Col, Card, Table, ProgressBar} from "react-bootstrap";
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
import { Link } from "react-router-dom";

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
            <h4>Welcome John!</h4>
            <p>Dashboard</p>
          </Col>
        </Row>
        <Row className="d-flex mr-6 flex-sm-column flex-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row justify-content-between flex-wrap flex-md-row">
          <Col className="rounded boxShadow m-10 d-flex flex-row justify-content-between align-items-center text-center flex-wrap">
            <Row className="p-10 m-10 bg-ccfeff br-200">
              <GoProject className="p-0 bg-00d4ff mainColor" size={30} />
            </Row>
            <Row className="text-end pt-2">
              <h5 className="fs-4 fw-bolder">92</h5>
              <p className="fs-14 fw-bolder">Projects</p>
            </Row>
          </Col>
          <Col className="rounded m-10 boxShadow d-flex flex-row justify-content-between align-items-center text-center flex-wrap">
            <Row className="p-10 m-10 bg-ccfeff br-200">
              <AiOutlineUsergroupAdd
                className="p-0"
                size={30}
                color="#00d4ff"
              />
            </Row>
            <Row className="text-end pt-2">
              <h5 className="fs-4 fw-bolder">132</h5>
              <p className="fs-14 fw-bolder">Clients</p>
            </Row>
          </Col>
          <Col className="rounded m-10 boxShadow d-flex flex-row justify-content-between align-items-center text-center flex-wrap">
            <Row className="p-10 m-10 bg-ccfeff br-200">
              <BiTask className="p-0" size={30} color="#00d4ff" />
            </Row>
            <Row className="text-end pt-2">
              <h5 className="fs-4 fw-bolder">32</h5>
              <p className="fs-14 fw-bolder">Tasks</p>
            </Row>
          </Col>
          <Col className="rounded m-10 boxShadow d-flex flex-row justify-content-between align-items-center text-center flex-wrap">
            <Row className="p-10 m-10 bg-ccfeff br-200">
              <AiOutlineUser className="p-0" size={30} color="#00d4ff" />
            </Row>
            <Row className="text-end pt-2">
              <h5 className="fs-4 fw-bolder">30</h5>
              <p className="fs-14 fw-bolder">Employees</p>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex my-3 flex-sm-column mt-6 flex-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row justify-content-between flex-wrap flex-md-row align-items-center overflow-hidden">
          <Col className="rounded my-1">
           
            <Bar
              options={optionsBar}
              data={dataBar}
              className="boxShadow rounded"
            />
            
          </Col>
          <Col className="rounded my-1 ">
           
            <Line
              options={optionsLine}
              data={dataLine}
              className="boxShadow rounded"
            />
           
          </Col>
        </Row>
        <Row className="my-sm-3 d-flex flex-sm-column flex-md-column flex-xxl-row flex-xl-row flex-lg-row flex-row">
          <Col className="my-1">
          <Card className="position-relative">
      <Card.Header><Card.Title>Clients</Card.Title></Card.Header>
      <Card.Body>
      <Table className="w-100 h-100" responsive>
          <thead>
            <tr>
              <th style={{backgroundColor:"transparent", color:"black"}}>Name</th>
              <th style={{backgroundColor:"transparent", color:"black"}}>Email</th>
              <th style={{backgroundColor:"transparent", color:"black"}}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>John Joe</td>
              <td>john@gmail.com</td>
              <td>active</td>
            </tr>
            <tr className="text-center">
              <td>John Joe</td>
              <td>john@gmail.com</td>
              <td>active</td>
            </tr>
            <tr className="text-center">
              <td>John Joe</td>
              <td>john@gmail.com</td>
              <td>active</td>
            </tr>
            <tr className="text-center">
              <td>John Joe</td>
              <td>john@gmail.com</td>
              <td>active</td>
            </tr>
            <tr className="text-center">
              <td>John Joe</td>
              <td>john@gmail.com</td>
              <td>active</td>
            </tr>
            
          </tbody>
        </Table>
      </Card.Body>
      <Link className="textDecoration-none" to={"/client"}>
      <Card.Footer className="text-muted text-center">View all Clients</Card.Footer>
      </Link>
    </Card>
          </Col>
          <Col className="my-1">
          <Card className="position-relative">
      <Card.Header><Card.Title>Recent Projects</Card.Title></Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th style={{backgroundColor:"transparent", color:"black"}}>Project Name</th>
              <th style={{backgroundColor:"transparent", color:"black"}}>Progress</th>
              <th style={{backgroundColor:"transparent", color:"black"}}>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>HRMS</td>
              <td><ProgressBar  variant="mainColor" now={90} label={`${90}%`}/></td>
              <td>High</td>
            </tr>
            <tr className="text-center">
              <td>HRMS</td>
              <td><ProgressBar variant="mainColor" now={30} label={`${30}%`}/></td>
              <td>Low</td>
            </tr>
            <tr className="text-center">
              <td>HRMS</td>
              <td><ProgressBar variant="mainColor" now={90} label={`${90}%`} /></td>
              <td>High</td>
            </tr>
            <tr className="text-center">
              <td>HRMS</td>
              <td><ProgressBar variant="mainColor" color="text-black"  now={50} label={`${50}%`} /></td>
              <td>Medium</td>
            </tr>
            <tr className="text-center">
              <td>HRMS</td>
              <td><ProgressBar variant="mainColor" now={20} label={`${20}%`} /></td>
              <td>Low</td>
            </tr>
            
            
          </tbody>
        </Table>
      </Card.Body>
      <Link className="textDecoration-none" to={"/project"}>
      <Card.Footer className="text-muted text-center">View all projects</Card.Footer>
      </Link>
    </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
