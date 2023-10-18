import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { SlCalender} from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/Css/Sidebar.css'
import { FaUsersGear} from 'react-icons/fa6';
import { BiNotepad, BiSolidPieChartAlt2, BiSolidUser, BiSolidUserDetail } from 'react-icons/bi';
import { SiGooglesheets } from 'react-icons/si';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';
import { GiShakingHands } from 'react-icons/gi';
import { IoSettingsOutline} from 'react-icons/io5';
import { TbSpeakerphone } from 'react-icons/tb';
import { PiStudentDuotone } from 'react-icons/pi';
import { BsTicketPerforated } from 'react-icons/bs';

const Sidebar = () => {

      
  return (
    <div className='rounded position-fixed 'style={{marginRight:"5px"}} >
    <Container fluid className='d-sm-none sidebar  d-md-none d-lg-block d-xxl-block d-xl-block  justify-content-start align-items-start d-none ' style={{backgroundColor:"#313947",height:"92vh",width:"100%",overflowY:"auto",marginLeft:"-12px"}} >
        <Row className='p-2 d-flex align-items-center' >
          <Link to={"/"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6 className='d-flex align-items-center ' ><MdOutlineAdminPanelSettings  size={20} style={{marginRight:"10px",}}/>Admin Dashboard</h6>
          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
          <Link to={"/employeeDashboard"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6  className='d-flex align-items-center' style={{fontSize:"15px",}}><BiSolidUserDetail size={20} style={{marginRight:"10px"}}/> Employee Dashboard</h6>

          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/employee"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><BiSolidUser size={20} style={{marginRight:"10px",}}/> Employee</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
          <Link to={"/attendance"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}> <BiNotepad  size={20} style={{marginRight:"10px",}}/>Attendance</h6>

          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/timesheet"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><SiGooglesheets size={20} style={{marginRight:"10px",}}/>Time Sheet</h6>

        </Link>
        </Row>

        <Row className='p-2 d-flex align-items-center'> 
       <Link to={"/leave"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
       <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><SlCalender size={20} style={{marginRight:"10px",}}/>Leave</h6>

       </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
       <Link to={"/designation"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
       <h6 className='d-flex align-items-center' style={{fontSize:"15px",}} ><FaUsersGear size={20} style={{marginRight:"10px",}}/>Designation</h6>

       </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
       <Link to={"/training"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
       <h6 className='d-flex align-items-center' style={{fontSize:"15px",}} ><PiStudentDuotone size={20} style={{marginRight:"10px",}}/>Training</h6>

       </Link>
        </Row>
        <Accordion className='mt-3 mb-3'>
      <Accordion.Item eventKey="0"  style={{backgroundColor:"#313947",outline:"none",border:"none"}}>
        <Accordion.Header className='' style={{ backgroundColor: '#313947',color:"white", }} ><BiSolidPieChartAlt2 size={20} style={{marginRight:"10px",}}/>Report  </Accordion.Header>
        <Accordion.Body>
        <Row >
        <Link to={"/userReport"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}>User (Report)</h6>

        </Link>
        </Row>
        <Row >
            <Link to={"/attendanceReport"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
              <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}>Attendance (Report)</h6></Link>
        </Row>
        <Row >
<Link to={"/leaveReport"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
<h6 className='d-flex align-items-center' style={{fontSize:"15px",}}>Leave (Report)</h6>

</Link>
        </Row>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/project"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><AiOutlineProject size={20} style={{marginRight:"10px",}}/>Projects</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/ticket"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center'  style={{fontSize:"15px",}}><BsTicketPerforated size={20} style={{marginRight:"10px",}}/>Tickets</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/client"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}><GiShakingHands size={20} style={{marginRight:"10px",}}/>Clients</h6>

        </Link>
        </Row>
        <Accordion className='mt-3 mb-3'>
      <Accordion.Item eventKey="0"  style={{backgroundColor:"#313947",outline:"none",border:"none"}}>
        <Accordion.Header className='' style={{ backgroundColor: '#313947',color:"white", }} ><IoSettingsOutline size={20} style={{marginRight:"10px",}}/>Settings</Accordion.Header>
        <Accordion.Body>
        <Row >
        <Link to={"/status"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center' style={{fontSize:"15px",}}>Status</h6>

        </Link>
        </Row>
        
  
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/promotion"} className='mt-2 mb-2 p-2 d-flex align-items-center' style={{textDecoration: 'none',color:"white",cursor:"pointer"}}  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center'  style={{fontSize:"15px",}}><TbSpeakerphone size={20} style={{marginRight:"10px",}}/>Promotion</h6>

        </Link>
        </Row>
        
     
    </Container>
    </div>
  )
}

export default Sidebar
