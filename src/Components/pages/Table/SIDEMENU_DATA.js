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
import { SlCalender} from 'react-icons/sl';

export const sidebarItems = [
    {
      "id": 1,
      "label": "Admin Dashboard",
      "parent_id": null,
      "icon": <MdOutlineAdminPanelSettings  size={20} />,
      "order_index": 1,
      "url": "/"
    },{
      "id": 2,
      "label": "Employee Dashboard",
      "parent_id": null,
      "icon": <BiSolidUserDetail size={20}/>,
      "order_index": 2,
      "url": "/employeeDashboard",
    },
    {
      "id": 3,
      "label": "All Employees",
      "parent_id": null,
      "icon": <BiSolidUser size={20}/>,
      "order_index": 3,
      "url": "/employee",
    },
    {
      "id": 4,
      "label": "Attendance",
      "parent_id": null,
      "icon": <BiNotepad  size={20}/>,
      "order_index": 4,
      "url": "/attendance",
    },
    {
      "id": 6,
      "label": "Time Sheet",
      "parent_id": null,
      "icon": <SiGooglesheets  size={20}/>,
      "order_index": 6,
      "url": "/timeSheet",
    },
    {
      "id": 7,
      "label": "Leave",
      "parent_id": null,
      "icon": <SlCalender size={20}/>,
      "order_index": 7,
      "url": "/leave",
    },
    {
      "id": 8,
      "label": "Designation",
      "parent_id": null,
      "icon": <FaUsersGear  size={20}/>,
      "order_index": 8,
      "url": "/designation",
    },
    {
      "id": 9,
      "label": "Training",
      "parent_id": null,
      "icon": <PiStudentDuotone   size={20}/>,
      "order_index": 9,
      "url": "/training",
    },
    {
      "id": 10,
      "label": "Report",
      "parent_id": null,
      "icon": <BiSolidPieChartAlt2 size={20}/>,
      "order_index": 10,
      "url": "/products ",
      "children": [
        {
          "id": 11,
          "label": "User (Report)",
          "parent_id": 10,
          "icon": "",
          "order_index":1,
          "url": "/userReport"
        },
        {
          "id": 12,
          "label": "Attendance (Report)",
          "parent_id": 10,
          "icon": "",
          "order_index": 2,
          "url": "/attendanceReport"
        }
        ,
        {
          "id": 13,
          "label": "Leave (Report)",
          "parent_id": 10,
          "icon": "",
          "order_index": 3,
          "url": "/leaveReport"
        }
      ]
    },
    {
      "id": 14,
      "label": "Project",
      "parent_id": null,
      "icon": <AiOutlineProject size={20}/>,
      "order_index": 14,
      "url": "/project"
    },
    {
      "id": 15,
      "label": "PaySlip",
      "parent_id": null,
      "icon": <LiaMoneyCheckAltSolid size={20}/>,
      "order_index": 15,
      "url": "/payslip"
    },
    {
      "id": 16,
      "label": "Tickets",
      "parent_id": null,
      "icon": <BsTicketPerforated size={20}/>,
      "order_index": 16,
      "url": "/ticket"
    },
    {
      "id": 17,
      "label": "Clients",
      "parent_id": null,
      "icon": <GiShakingHands size={20}/>,
      "order_index": 17,
      "url": "/client"
    },
    {
      "id": 18,
      "label": "Settings",
      "parent_id": null,
      "icon": <IoSettingsOutline size={20}/>,
      "order_index": 18,
      "url": "/products ",
      "children": [
        {
          "id": 19,
          "label": "Company Settings",
          "parent_id": 18,
          "icon": "",
          "order_index":1,
          "url": "/products/electronics"
        },
        {
          "id": 20,
          "label": "Notification settings",
          "parent_id": 18,
          "icon": "",
          "order_index": 2,
          "url": "/products/clothing"
        }
        ,
        {
          "id": 21,
          "label": "Status",
          "parent_id": 18,
          "icon": "",
          "order_index": 3,
          "url": "/products/clothing"
        }
      ]
    },
    {
      "id": 22,
      "label": "Promotion",
      "parent_id": null,
      "icon": <TbSpeakerphone size={20}/>,
      "order_index": 17,
      "url": "/promotion"
    },
    
]
