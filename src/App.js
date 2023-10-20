import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import MainNav from "./Components/pages/MainNav";
import AdminDashboard from "./Components/pages/AdminDashboard";
import Designation from "./Components/pages/Designation";
import EmployeeDashboard from "./Components/pages/EmployeeDashboard";
import Forgot from "./Components/pages/Forgot";
import Reset from "./Components/pages/Reset";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Components/pages/Sidebar";
import Employee from "./Components/pages/Employee";
import Attendance from "./Components/pages/Attendance";
import TimeSheet from "./Components/pages/TimeSheet";
import Leave from "./Components/pages/Leave";
import Report from "./Components/pages/Report";
import Projects from "./Components/pages/Projects";
import Clients from "./Components/pages/Clients";
import Promotion from "./Components/pages/Promotion";
import UserReport from "./Components/pages/UserReport";
import AttendanceReport from "./Components/pages/AttendanceReport";
import LeaveReport from "./Components/pages/LeaveReport";
import Training from "./Components/pages/Training";
import ProjectAddForm from "./Components/pages/Forms/ProjectAddForm";
import ProjectEditForm from "./Components/pages/Forms/ProjectEditForm";
import TimeSheetAddForm from "./Components/pages/Forms/TimeSheetAddForm";
import TimeSheetEditForm from "./Components/pages/Forms/TimeSheetEditForm";
import Status from "./Components/pages/Status";
import Tickets from "./Components/pages/Tickets";
import TrainingAddForm from "./Components/pages/Forms/TrainingAddForm";
import TrainingEditForm from "./Components/pages/Forms/TrainingEditForm";
import PromotionAddForm from "./Components/pages/Forms/PromotionAddForm";
import PromotionEditForm from "./Components/pages/Forms/PromotionEditForm";
import EmployeeAddForm from "./Components/pages/Forms/EmployeeAddForm";
import EmployeeEditForm from "./Components/pages/Forms/EmployeeEditForm";
import PaySlip from "./Components/pages/PaySlip";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <Router>
        {authenticated && <MainNav />}

        <Container fluid>
          <Row>
            {authenticated && (
              <Col lg={3} xxl={2} xl={2}>
              <Sidebar/>
              </Col>
            )}

            <Col lg={authenticated ? 9 : 12} xxl={authenticated ? 10 : 12} xl={authenticated ? 10 : 12} md={12} sm={12}>
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/reset" element={<Reset />} />

                {/* Private Routes */}
                <Route
                  path="/"
                  element={authenticated ? <AdminDashboard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/designation"
                  element={authenticated ? <Designation /> : <Navigate to="/login" />}
                />
                <Route
                  path="/employeeDashboard"
                  element={authenticated ? <EmployeeDashboard /> : <Navigate to="/login" />}
                />
                <Route
                  path="/employee"
                  element={authenticated ? <Employee /> : <Navigate to="/login" />}
                />
                <Route
                  path="/attendance"
                  element={authenticated ? <Attendance/> : <Navigate to="/login" />}
                />
                <Route
                  path="/timeSheet"
                  element={authenticated ? <TimeSheet/> : <Navigate to="/login" />}
                />
                <Route
                  path="/leave"
                  element={authenticated ? <Leave /> : <Navigate to="/login" />}
                />
                <Route
                  path="/report"
                  element={authenticated ? <Report /> : <Navigate to="/login" />}
                />
                <Route
                  path="/project"
                  element={authenticated ? <Projects/> : <Navigate to="/login" />}
                />
                <Route
                  path="/payslip"
                  element={authenticated ? <PaySlip/> : <Navigate to="/login" />}
                />
                <Route
                  path="/client"
                  element={authenticated ? <Clients /> : <Navigate to="/login" />}
                />
                <Route
                  path="/status"
                  element={authenticated ? <Status/> : <Navigate to="/login" />}
                />
                <Route
                  path="/promotion"
                  element={authenticated ? <Promotion /> : <Navigate to="/login" />}
                />
                <Route
                  path="/userReport"
                  element={authenticated ? <UserReport/> : <Navigate to="/login" />}
                />
                <Route
                  path="/attendanceReport"
                  element={authenticated ? <AttendanceReport/> : <Navigate to="/login" />}
                />
                <Route
                  path="/leaveReport"
                  element={authenticated ? <LeaveReport/> : <Navigate to="/login" />}
                />
                <Route
                  path="/training"
                  element={authenticated ? <Training/> : <Navigate to="/login" />}
                />
                <Route
                  path="/projectAddForm"
                  element={authenticated ? <ProjectAddForm/> : <Navigate to="/login" />}
                />
                <Route
                  path="/projectEditForm"
                  element={authenticated ? <ProjectEditForm/> : <Navigate to="/login" />}
                />
                <Route
                  path="/timeSheetAddForm"
                  element={authenticated ? <TimeSheetAddForm/> : <Navigate to="/login" />}
                />
                <Route
                  path="/timeSheetEditForm"
                  element={authenticated ? <TimeSheetEditForm/> : <Navigate to="/login" />}
                />
                 <Route
                  path="/ticket"
                  element={authenticated ? <Tickets/> : <Navigate to="/login" />}
                />
                <Route
                  path="/trainingAddForm"
                  element={authenticated ? <TrainingAddForm/> : <Navigate to="/login" />}
                />
                <Route
                  path="/trainingEditForm"
                  element={authenticated ? <TrainingEditForm/> : <Navigate to="/login" />}
                />
                <Route
                  path="/promotionAddForm"
                  element={authenticated ? <PromotionAddForm/> : <Navigate to="/login" />}
                />
                <Route
                  path="/promotionEditForm"
                  element={authenticated ? <PromotionEditForm/> : <Navigate to="/login" />}
                />
                <Route
                  path="/employeeAddForm"
                  element={authenticated ? <EmployeeAddForm/> : <Navigate to="/login" />}
                />
                <Route
                  path="/employeeEditForm"
                  element={authenticated ? <EmployeeEditForm/> : <Navigate to="/login" />}
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
