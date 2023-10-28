import React from 'react'
import { Accordion, Container, Row } from 'react-bootstrap'
import { SlCalender} from 'react-icons/sl';
import { Link } from 'react-router-dom';
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
import { LiaMoneyCheckAltSolid } from 'react-icons/lia';


const Sidebar = () => {

      
  return (
    <div className='rounded position-fixed 'style={{marginRight:"5px"}} >
    <Container fluid className='d-sm-none sidebar  d-md-none d-lg-block d-xxl-block d-xl-block  justify-content-start align-items-start d-none ' style={{backgroundColor:"#313947",height:"92vh",width:"100%",overflowY:"auto",marginLeft:"-12px"}} >
        <Row className='p-2 d-flex align-items-center' >
          <Link to={"/"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer' onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6 className='d-flex align-items-center ' ><MdOutlineAdminPanelSettings  size={20} className='mr-10'/>Admin Dashboard</h6>
          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
          <Link to={"/employeeDashboard"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6  className='d-flex align-items-center fs-15' ><BiSolidUserDetail size={20} className='mr-10'/> Employee Dashboard</h6>

          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/employee"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15' ><BiSolidUser size={20} className='mr-10'/>All Employees</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
          <Link to={"/attendance"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
          <h6 className='d-flex align-items-center fs-15' > <BiNotepad  size={20} className='mr-10'/>Attendance</h6>

          </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/timesheet"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15' ><SiGooglesheets size={20} className='mr-10'/>Time Sheet</h6>

        </Link>
        </Row>

        <Row className='p-2 d-flex align-items-center'> 
       <Link to={"/leave"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'   onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
       <h6 className='d-flex align-items-center fs-15' ><SlCalender size={20} className='mr-10'/>Leave</h6>

       </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
       <Link to={"/designation"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'   onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
       <h6 className='d-flex align-items-center fs-15'  ><FaUsersGear size={20} className='mr-10'/>Designation</h6>

       </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
       <Link to={"/training"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
       <h6 className='d-flex align-items-center fs-15'  ><PiStudentDuotone size={20} className='mr-10'/>Training</h6>

       </Link>
        </Row>
        <Accordion className='mt-3 mb-3'>
      <Accordion.Item eventKey="0"  style={{backgroundColor:"#313947",outline:"none",border:"none"}}>
        <Accordion.Header className='' style={{ backgroundColor: '#313947',color:"white", }} ><BiSolidPieChartAlt2 size={20} style={{marginRight:"10px",}}/>Report  </Accordion.Header>
        <Accordion.Body>
        <Row >
        <Link to={"/userReport"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15' >User (Report)</h6>

        </Link>
        </Row>
        <Row >
            <Link to={"/attendanceReport"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
              <h6 className='d-flex align-items-center fs-15' >Attendance (Report)</h6></Link>
        </Row>
        <Row >
<Link to={"/leaveReport"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'   onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
<h6 className='d-flex align-items-center fs-15' >Leave (Report)</h6>

</Link>
        </Row>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/project"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer' onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15' ><AiOutlineProject size={20} className='mr-10'/>Projects</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/payslip"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'   onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15' ><LiaMoneyCheckAltSolid size={20} className='mr-10'/>PaySlip</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/ticket"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'   onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15'  ><BsTicketPerforated size={20} className='mr-10'/>Tickets</h6>

        </Link>
        </Row>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/client"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'   onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15'><GiShakingHands size={20} className='mr-10'/>Clients</h6>

        </Link>
        </Row>
        <Accordion className='mt-3 mb-3'>
      <Accordion.Item eventKey="0"  style={{backgroundColor:"#313947",outline:"none",border:"none"}}>
        <Accordion.Header className='' style={{ backgroundColor: '#313947',color:"white", }} ><IoSettingsOutline size={20} style={{marginRight:"10px",}}/>Settings</Accordion.Header>
        <Accordion.Body>
        <Row >
        <Link to={"/status"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15' >Status</h6>

        </Link>
        </Row>
        
  
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Row className='p-2 d-flex align-items-center'>
        <Link to={"/promotion"} className='mt-2 mb-2 p-2 d-flex align-items-center textDecoration-none color-white pointer'  onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "#00d4ff";e.currentTarget.style.color = "black"}}onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent";e.currentTarget.style.color = "white" }}>
        <h6 className='d-flex align-items-center fs-15'  ><TbSpeakerphone size={20} className='mr-10'/>Promotion</h6>

        </Link>
        </Row>
        
     
    </Container>
    </div>
  )
}

export default Sidebar
