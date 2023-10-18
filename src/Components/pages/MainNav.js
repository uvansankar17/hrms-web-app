import React, { useState } from "react";
import MainLogo from "../Images/logo.jpeg";
import {
  Accordion,
  Badge,
  Col,
  Container,
  Dropdown,
  Form,
  Offcanvas,
  Row,
} from "react-bootstrap";

import {
  AiOutlineMenu, AiOutlineProject,
  
} from "react-icons/ai";
import { BsThreeDotsVertical} from "react-icons/bs";



import { Link, useNavigate } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { BiNotepad, BiSolidPieChartAlt2, BiSolidUser, BiSolidUserDetail } from "react-icons/bi";
import { SiGooglesheets } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GiShakingHands } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbSpeakerphone } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";



const MainNav = () => {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container
        fluid
        className="d-flex  flex-row flex-wrap-wrap justify-content-between align-items-center overflowX-hidden"
        style={{ backgroundColor: "#00d4ff", position: "sticky", top: "0" }}
      >
        <Row className="d-flex flex-row flex-wrap-wrap justify-content-around align-items-center p-2">
          <Col className="d-lg-none d-xl-none d-sm-flex">
            <AiOutlineMenu
              size={25}
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            />
          </Col>
          <Col
            className='d-lg-flex d-none d-sm-none  flex-row flex-wrap-wrap justify-content-between"align-items-center '
            style={{ marginRight: "100px" }}
          >
            <img
              src={MainLogo}
              width={40}
              className="rounded-circle "
              alt="..."
            ></img>
          </Col>

          
        </Row>

        <Row>
          <Col className='d-lg-none d-sm-flex flex-row flex-wrap-wrap justify-content-between"align-items-center '>
            <img
              src={MainLogo}
              width={60}
              className="rounded-circle p-2"
              alt="..."
            ></img>
          </Col>
        </Row>
        <Row className="d-flex mt-1">
          <Col className="d-lg-none d-sm-flex">
            <BsThreeDotsVertical size={25} style={{ cursor: "pointer" }} />
          </Col>
          
          <Col className='d-lg-flex d-none d-sm-none flex-row flex-wrap-wrap justify-content-center"align-items-center'>
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                style={{ width: "30px" }}
                alt="Avatar"
              />
            </div>
           
          </Col>
        </Row>
      </Container>

      {/* canvas */}

      <Row className="d-sm-flex d-lg-none d-xl-none d-xxl-none">
        <Offcanvas scroll={true} show={show} onHide={handleClose}>
          <Offcanvas.Header style={{ backgroundColor: "#00d4ff" }} closeButton>
            <Offcanvas.Title
              className="custom-title"
              style={{
                fontSize:"16px" , // Adjust font sizes as needed
              }}
            >
              <img
                src={MainLogo}
                width={60}
                className="rounded-circle p-2"
                alt="..."
              ></img>
              DriftMark Technologies
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{backgroundColor:"#313947"}}>
          <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
          <Link to={"/"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6 className='d-flex align-items-center ' ><MdOutlineAdminPanelSettings  size={20} style={{marginRight:"10px",}}/>Admin Dashboard</h6>
          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
          <Link to={"/employeeDashboard"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6  className='d-flex align-items-center' style={{fontSize:"15px",}}><BiSolidUserDetail size={20} style={{marginRight:"10px"}}/> Employee Dashboard</h6>

          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
        <Link to={"/employee"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><BiSolidUser size={20} style={{marginRight:"10px",}}/> Employee</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
          <Link to={"/attendance"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}> <BiNotepad  size={20} style={{marginRight:"10px",}}/>Attendance</h6>

          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
        <Link to={"/timesheet"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><SiGooglesheets size={20} style={{marginRight:"10px",}}/>Time Sheet</h6>

        </Link>
        </Row>

        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}> 
       <Link to={"/leave"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
       <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><SlCalender size={20} style={{marginRight:"10px",}}/>Leave</h6>

       </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
       <Link to={"/designation"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
       <h6 className='d-flex align-items-center' style={{fontSize:"15px",}} ><FaUsersGear size={20} style={{marginRight:"10px",}}/>Designation</h6>

       </Link>
        </Row>
        <Accordion className='mt-3 mb-3' >
      <Accordion.Item eventKey="0"  style={{backgroundColor:"#313947",outline:"none",border:"none"}}>
        <Accordion.Header className='' style={{ backgroundColor: '#313947',color:"white", }} ><BiSolidPieChartAlt2 size={20} style={{marginRight:"10px",}}/>Report  </Accordion.Header>
        <Accordion.Body>
        <Row onClick={()=>setShow(false)} >
        <Link to={"/userReport"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}>User (Report)</h6>

        </Link>
        </Row>
        <Row onClick={()=>setShow(false)}>
            <Link to={"/attendanceReport"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
              <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}>Attendance (Report)</h6></Link>
        </Row>
        <Row onClick={()=>setShow(false)}>
<Link to={"/leaveReport"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
<h6 className='d-flex align-items-center' style={{fontSize:"15px",}}>Leave (Report)</h6>

</Link>
        </Row>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
        <Link to={"/project"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><AiOutlineProject size={20} style={{marginRight:"10px",}}/>Projects</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
        <Link to={"/client"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><GiShakingHands size={20} style={{marginRight:"10px",}}/>Clients</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center' onClick={()=>setShow(false)}>
        <Link to={"/setting"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><IoSettingsOutline size={20} style={{marginRight:"10px",}}/>Settings</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'onClick={()=>setShow(false)}>
        <Link to={"/promotion"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center'  style={{fontSize:"15px",}}><TbSpeakerphone size={20} style={{marginRight:"10px",}}/>Promotion</h6>

        </Link>
        </Row>
        
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </>
  );
};

export default MainNav;
