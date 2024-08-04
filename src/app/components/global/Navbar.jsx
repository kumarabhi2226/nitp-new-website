/** @format */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./styles/Navbar.css";
import logo from "../../assets/images/logo.png";
import About from "../../assets/images/about.svg";
import Value from "../../assets/images/value.svg";
import Mission from "../../assets/images/mission.svg";
import Home from "../../assets/images/home.svg";
import Campus from "../../assets/images/campus.svg";
import Resource from "../../assets/images/resource.svg";
import Director from "../../assets/images/director.svg";
import Person from "../../assets/images/person.svg";
import President from "../../assets/images/president.svg";
import Sperson from "../../assets/images/sperson.svg";
import FirstYear from "../../assets/images/1styear.svg";
import Admin from "../../assets/images/admin.svg";
import Admission from "../../assets/images/admission.svg";
import Bis from "../../assets/images/bis.svg";
import Calendar from "../../assets/images/calendar.svg";
import Chankaya from "../../assets/images/chankaya.svg";

import Clubs from "../../assets/images/clubs.svg";

import Department from "../../assets/images/department.svg";
import Digital from "../../assets/images/digital.svg";
import Document from "../../assets/images/document.svg";

import Ecell from "../../assets/images/Ecell.svg";
import Excellence from "../../assets/images/excellence.svg";
import Faculty from "../../assets/images/faculty.svg";
import Fee from "../../assets/images/fee.svg";
import Fest from "../../assets/images/fest.svg";

import Forms from "../../assets/images/forms.svg";
import Idcard from "../../assets/images/idcard.svg";
import International from "../../assets/images/international.svg";
import Jobs from "../../assets/images/jobs.svg";

import Mail from "../../assets/images/mail.svg";

import Notice from "../../assets/images/notice.svg";
import Bharat from "../../assets/images/bharat.svg"
import NssNew from "../../assets/images/nssnew.svg";
import Officers from "../../assets/images/officers.svg";
import Portal from "../../assets/images/portal.svg";

import Programs from "../../assets/images/programs.svg";

import Rules from "../../assets/images/rules.svg";
import Sac from "../../assets/images/sac.svg";
import Schlorship from "../../assets/images/schlorship.svg";
import Sports from "../../assets/images/sports.svg";
import Staffs from "../../assets/images/staffs.svg";
import Structure from "../../assets/images/structure.svg";
import Studentexchange from "../../assets/images/studentexchange.svg";
import women from "../../assets/images/women.svg";
import Tequip from "../../assets/images/Tequip.svg";
import scst from "../../assets/images/scst.svg"
import security from "../../assets/images/security.svg";
import Library from "../../assets/images/Library.svg";
import Hostel from "../../assets/images/hostel.svg";
import Labs from "../../assets/images/Labs.svg";
import Bank from "../../assets/images/bank.svg";
import Hospital from "../../assets/images/Hospital.svg";
import EMU from "../../assets/images/EMU.svg";
import ESU from "../../assets/images/ESU.svg";
import ComputerCentre from "../../assets/images/ComputerCentre.svg"
import itservice from "../../assets/images/itservice.svg"
import cse from "../../assets/images/cse.svg"
import ece from "../../assets/images/ECE.svg"
import ee from "../../assets/images/ee.svg"
import archi from "../../assets/images/archi.svg"
import chem from "../../assets/images/chem.svg"
import civil from "../../assets/images/civil.svg"
import hss from "../../assets/images/hss.svg"
import math from "../../assets/images/math.svg"
import mech from "../../assets/images/mech.svg"
import physics from "../../assets/images/physics.svg"



import useNavigationEvent from "./useNavigationEvent"
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  {
    label: <Image src={Home} alt="Home" width={20} height={20} />,
    link: "/",
  },
  
  {
    label: "Institute",
    link: "/Institute",
    mlabel:"Institute",
    children: [
      
      { 
        label: "About", 
        link: "/Institute/?tab=about", 
        iconImage: About,
       
      },
      { 
        label: "Mission and Vision", 
        link: "/Institute/?tab=mission", 
        iconImage: Mission,
      },
      { 
        label: "Values", 
        link: "/Institute/?tab=values", 
        iconImage: Value,
       
      },
      { 
        label: "Director", 
        link: "/Institute/Director", 
        iconImage: Director,
      },
      { 
        label: "Campus", 
        link: "/Institute/?tab=campus", 
        iconImage: Campus,
      },
      { 
        label: "Magazine", 
        link: "/Institute/Magazine", 
        iconImage: Resource,
        
      },
    ],
  },
  {
    label: "Administration",
    link: "/Administration/Visitor",
    mlabel:"Administration",
    children: [
      {
        label: "Visitor",
        link: '/Administration/Visitor',
        iconImage:President,
      },
      {
        label: "Council of NITs",
        link: "/Administration/CONIT",
        iconImage:Person,
      },
      {
        label: "Board of Governors",
        link: "/Administration/BOG",
        iconImage:Person,
      },
      {
        label: "Senate",
        link: "/Administration/Senate",
        iconImage:Person,
      },

      {
        label: "Director",
        link: "/Institute/Director",
        iconImage:Director,
      },
      {
        label: "Registrar",
        link: "/Administration/Registrar",
        iconImage:Sperson,
      },
      {
        label: "Deans",
        link: "/Administration/Deans",
        iconImage:Person,
      },

      {
        label: "Building Work Committee ",
        link: "/Administration/BWC",
        iconImage:Person,
      },
      {
        label: "Institute Disciplinary Committee",
        link: "/Administration/IDC",
        iconImage:Person,
      },
      {
        label: "Finance committee",
        link: "/Administration/FinanceCommittee",
        iconImage:Person,
      },
      {
        label: "Service Unit Heads Organisation Chart",
        link: "/Administration/SUH",
        iconImage:Person,
      },
    ],
  },
  {
    label: "Academics",
    link: "/Academics/Programmes",
    mlabel:"Academics",
    children: [
      {
        label: "Programmes",
        link: "#",
        iconImage:Programs,
        
      },
      {
        label: "Course Structure",
        link: "#",
        iconImage:Structure,
        children: [
          { label: "UG", link: "", iconImage:Structure},
          { label: "PG(M. tech / MURP)", link: "", iconImage:Structure},
          { label: "M.tech/MURP-PHD(DD)", link: "", iconImage:Structure},
          { label: "Integrated M.Sc", link: "", iconImage:Structure},
          { label: "MCA", link: "", iconImage:Structure}
        ]
      },
      {
        label: "Admission",
        link: "/Academic/Admission?tab=JoSAA",
        iconImage:Admission,
        children: [
          { label: "Study in India (SII)", link: "/Academic/Admission?tab=SII" , iconImage:Admission},
          { label: "CMCT/JoSSA/CSAB/Others", link: "/Academic/Admission?tab=JoSAA" , iconImage:Admission},
          { label: "Relaxation Criteria", link: "/Academic/Admission?tab=Relaxation" , iconImage:Admission},
        ]
      },
      {
        label: "Departments",
        link: "#",
        mlabel:"Departments",
        iconImage:Department,
        children: [
          { label: "Architecture & Planning", link: "/department/arch/faculty",iconImage:archi},
          { label: "Chemistry", link: "/department/chem/faculty",iconImage:chem },
          { label: "Civil Engineering", link: "/department/ce/faculty",iconImage:civil },
          { label: "Computer Science and Engineering", link: "/department/cse/faculty",iconImage:cse },
          { label: "Electrical Engineering", link: "/department/ee/faculty", iconImage:ee },
          { label: "Electronics and Communication Engineering", link: "/department/ece/faculty", iconImage:ece },
          { label: "Humanities & Social Sciences", link: "/department/hss/faculty",iconImage:hss },
          { label: "Mathematics", link: "/department/math/faculty",iconImage:math },
          { label: "Mechanical Engineering", link: "/department/me/faculty" ,iconImage:mech},
          { label: "Physics", link: "/department/physics/faculty",iconImage:physics },
          { label:"Mechatronics & Automation Engineering",link:"/department/mae/faculty",iconImage:mech},
          { label: "Chemical Engineering and Technology", link: "/department/chet/faculty",iconImage:chem },
          { label: "Materials Science & Engineering", link: "/department/mse/faculty",iconImage:mech },
        ],
      },
      
      {
        label: "Academic Notices",
        link: "/Notices/Academic",
        iconImage:Notice,
      },
      {
        label: "Fee Structure",
        link: "/Academic/Fee",
        iconImage:Fee,
      },
      {
        label: "Regulation & Curricula",
        link: "/Academic/Curriculam",
        iconImage:Rules,
      },
      
      
      {
        label: "Academic Calendar",
        link: "https://drive.google.com/file/d/1tVgQSygS8GRTZIglbVWVClasegdd6BCi/view",
        iconImage:Calendar,
    },
      
      {
        label: "Format of Official Documents",
        link: "/Academic/Format",
        iconImage:Document,
      },
    
      {
        label: "Centre of Excellence",
        link: "#",
        children: [
          { label: "TSSC", link: "/Academic/ISRO",iconImage:Excellence},
          { label: "ISRO RACS", link: "/Academic/TSSC",iconImage:Excellence},
        ]
        ,
        iconImage:Excellence,
      },
      {
        label: "Digital Intiatives",
        link: "/Academic/DI",
        iconImage:Digital,
      },
      // {
      //   label: "ICT Academy",
      //   link: "#",
      // },
      {
        label: "Patents",
        link: "/Academic/Patent",
        iconImage:Bis,
      },
      {
        label: "Publications",
        link: "/Academic/Publication",
        iconImage:Bis,
      },
      {
        label: "BIS Dashboard",
        link: "/Academic/BIS",
        iconImage:Bis,
      },
      
      
    ],
  },
  {
    label: "Faculty & Staff",
    link: "/Academic/Faculty&Staff",
    children: [
      {
        label: "Web Mail",
        link: "http://mail.google.com/a/nitp.ac.in",
        iconImage:Mail,
      },
      {
        label: "Academic Portal",
        link: "http://exam.nitp.ac.in:9001/",
        iconImage:Portal,
      },
      {
        label: "Recruitments",
        link: "/Notices/JobsNITP",
        iconImage:Jobs,
      },
      {
        label: "Employee I-Card",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSedy0aZLXXj709zQjAejWvLQOs4_6ESIciPe0IV199kMr_D1g/viewform?usp=sf_link",
        iconImage:Idcard,
      },
      {
        label: "Staff Claim Form",
        link: "/Academic/Faculty&Staff/forms",
        iconImage:Forms,
      },
      {
        label: "Admin Login",
        link: "https://admin.nitp.ac.in/",
        iconImage:Admin,
      },
      {
        label: "International Affairs",
        link: "/Intitute/International",
        iconImage:International,
      },
      {
        label: "All Faculty Profile",
        link: "#",
        iconImage:Faculty,
      },
      {
        label: "Officers",
        link: "#",
        iconImage:Officers,
      },
      {
        label: "Other Employee",
        link: "#",
        iconImage:Staffs,
      },
    ],
  },
 
  {
    label: "Student",
    link: "/Student",
    children: [
      {
        label: "Admissions",
        link: "/Academic/Admission",
        iconImage:Admission,
      },
      {
        label: "Student I-Card",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc5_x34TMtQdMaW2Ad9Nvsmz1N8YXdAGJHtAM5kn3a850Ekyw/viewform",
        iconImage:Idcard,
      },
      {
        label: "Fee Payment",
        link: "https://paydirect.eduqfix.com/app/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466",
        iconImage:Fee,
      },
      {
        label: "Clubs/Socities",
        link: "/Student/Clubs",
        iconImage:Clubs,
      },
      {
        label: "1st Year Student",
        link: "/Student/StudentFirstYear",
        iconImage:FirstYear,
      },
      {
        label: "Student Activity Center",
        link: "/Student/SAC",
        iconImage:Sac,
      },
      {
        label: "Fellowship Opportunities",
        link: "/Student/FellowshipOpportunites",
        iconImage:Excellence,
      },
      {
        label: "Scholarship",
        link: "/Student/Scholarship",
        iconImage:Schlorship,
      },
      
      {
        label: " Tech Fest",
        link: "/Student/TechFest",
        iconImage:Fest,
      },
      {
        label: "Sports",
        link: "#",
        iconImage:Sports,
      },
      {
        label: "Student Exchange",
        link: "/Student/StudentExchange",
        iconImage:Studentexchange,
      },
      {
        label: "NSS@NITP",
        link: "/Student/NSS",
        iconImage:NssNew,
      },
      {
        label: "E-Cell",
        link: "/Student/E-Cell",
        iconImage:Ecell,
      },
      {
        label: "Unnat Bharat",
        link: "/Student/UnnatBharat",
        iconImage:Bharat,
      },
      {
        label: "Chanakya Portal",
        link: "http://exam.nitp.ac.in:9001/default.aspx?ReturnUrl=%2f",
        iconImage:Chankaya,
      },
    ],
  },
  {
    label: "Facilities",
    link: "/Facilities",
    children: [
      {
        label: "Computer Center",
        link: "/Facilities/ComputerCenter",
        iconImage:ComputerCentre,
      },
      {
        label: "IT Service Unit",
        link: "/Facilities/ItServices",
        iconImage:itservice,
      },
      {
        label: "TEQUIP",
        link: "/Facilities/TEQUIP",
        iconImage:Tequip,
      },
      {
        label: "Library",
        link: "/Facilities/Library",
        iconImage:Library,
      },
      {
        label: "Medical Facilities",
        link: "/Facilities/MedicalFacilities",
        iconImage:Hospital,
      },
      {
        label: "Sports Facilities",
        link: "/Facilities/SportsFacilities",
        iconImage:Sports,
      },
      {
        label: "Incubation Center",
        link: "https://web.nitp.ac.in/incubation_center/index.html",
        iconImage:Ecell,
      },
      {
        label: "Hostel & Mess",
        link: "/Facilities/Hostel",
        iconImage:Hostel,
      },
      {
        label: "Laboratories",
        link: "/Facilities/Laboratories",
        iconImage:Labs,
      },
      {
        label: "Bank",
        link: "/Facilities/Bank",
        iconImage:Bank,
      },
      {
        label: "Security",
        link: "/Facilities/Security",

        iconImage:security,
      },
      {
        label: "Women Cell",
        link: "/Facilities/WomanCell",
        iconImage:women,
      },
      {
        label: "SC/ST Cell",
        link: "/Facilities/SCST",
        iconImage:scst,
      },
      {
        label: "EMU",
        link: "/Facilities/Emu",
        iconImage:EMU,
      },
      {
        label: "ESU",
        link: "/Facilities/Esu",
        iconImage:ESU,
      },
    ],
  },
];

export default function Navbar() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  useNavigationEvent(() => setSideMenuOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={`mobiletest navbar-container  ${isSticky ? "sticky-nav md:py-0 stickdiv" : ""}`}>
      <div className="header-top mx-auto flex w-full max-w-9xl justify-between px-4 py-2 bg-white/40 backdrop-blur-lg shadow-lg">
        <div className="right-content">
          <div className="font-bold textmob text-black">राष्ट्रीय प्रौद्योगिकी संस्थान पटना</div>
          <div className="text-sm textmob text-black">NATIONAL INSTITUTE OF TECHNOLOGY PATNA</div>
        </div>
        <div className="left-content flex">
          <Link href="/">  <Image src={logo} alt="NIT PATNA" height={70} /></Link>
        
        </div>
        <div className="institute-info pt-4 hidden text-center items-center justify-center md:block text-black">
          <div>An Institute of National Importance under Ministry of Education</div>
          <div>(Shiksha Mantralaya), Government of India</div>
        </div>
      </div>

      <div className="desktopnav mx-auto flex w-full max-w-7xl justify-center px-4 py-3 text-sm bg-white/40 md:py-1 md:bg-[#811919] backdrop-blur-lg md:rounded-xl shadow-lg">
        
        <section className="nav-items hidden md:flex">
        
        {navItems.map((item, index) => (
          
          <NavItem key={index} item={item} />
        ))}
      </section>
        <FiMenu onClick={() => setSideMenuOpen(true)} className="cursor-pointer text-4xl md:hidden text-black" />
      </div>

      {isSideMenuOpen && <MobileNav closeSideMenu={() => setSideMenuOpen(false)} />}
    </div>
  );
}


function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative  "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      
      <Link href={item.link ?? "#"} className="flex cursor-pointer items-center gap-2 px-10 py-3 text-white transition-all group-hover:text-red-200">
        <span>{item.label}</span>
        {item.children && <IoIosArrowDown className={`transition-all ${isOpen ? "rotate-180" : ""}`} />}
      </Link>
      {item.children && (
        <div className={`absolute right-0 top-10 w-auto flex-col gap-1 rounded-lg bg-white  shadow-md transition-all ${isOpen ? "flex" : "hidden"} group`}>
          <div className="border-solid border-2 border-red-800 m-4 p-2 rounded-lg	bg-white shadow-red-500/30 shadow-md">
          {item.children.map((child, index) => (
            <DropdownItem key={index} item={child} parentLabel={item.mlabel} />
          ))}</div>
        </div>
      )}
    </div>
  );
}



function DropdownItem({ item, parentLabel }) {
  const [isSOpen, setIsSOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsSOpen(true)}
      onMouseLeave={() => setIsSOpen(false)}
    >
      
      <Link href={item.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-700 hover:text-red-600">
        {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
        <span className="whitespace-nowrap pl-3">{item.label}</span>
        {item.children && <IoIosArrowDropright className={`ml-auto transition-all ${isSOpen ? "rotate-180" : ""}`} />}
      </Link>
      
      {item.children && (
        
        <div className={`absolute left-full top-0  w-auto flex-col gap-1 rounded-lg bg-white  shadow-md transition-all ${isSOpen ? "flex" : "hidden"}`}>
          <div className="border-solid border-2 border-red-800 m-4 p-2 rounded-lg	">
          {item.children.map((subChild, subIndex) => (
            <Link key={subIndex} href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-700 hover:text-red-600">
              {subChild.iconImage && <Image src={subChild.iconImage} alt="item-icon" />}
              <span className="whitespace-nowrap pl-3">{subChild.label}</span>
            </Link>
          ))}</div>
        </div>
      )}
    </div>
  );
}
function MobileNav({ closeSideMenu }) {



  return (
    <div className="mobile-nav text-black">
      <div className="mobile-nav-content text-black">
        <AiOutlineClose onClick={closeSideMenu} className="mobile-nav-close text-4xl text-black" />
        <div className="flex flex-col text-base gap-2 transition-all ">
          {navItems.map((item, index) => (
            
            <SingleNavItem key={index} item={item} onClick={closeSideMenu} />
          ))}
        </div>
      </div>
    </div>
  );
}




function SingleNavItem({ item ,closeSideMenu}) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);
 
  return (
    <div ref={animationParent} className="relative px-1 py-3 transition-all">
      <p onClick={() => setItemOpen(!isItemOpen)} className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black">
      {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
      <Link href={ "#"} onClick={closeSideMenu} >
                {item.label}
              </Link>
        {item.children && <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />}
      </p>
      {isItemOpen && item.children && (
        <p className="w-auto flex-col gap-1  bg-white py-3 transition-all flex">
          {item.children.map((child, index) => (
            <SubSidemenu key={index} item={child}/>
          ))}
        </p>
      )}
    </div>
  );
}
function SubSidemenu({ item,closeSideMenu }) {
  const [isSubItemOpen, setSubItemOpen] = useState(false);
  const [isItemOpen, setItemOpen] = useState(true);
  const handleSubToggle = () => {
    setSubItemOpen(!isSubItemOpen);
  };

  return (
    <div className="relative px-1 py-1 transition-all">
      <p onClick={handleSubToggle} className="flex cursor-pointer items-center gap-1 text-neutral-700 group-hover:text-black">
      {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
        <Link href={item.link ?? "#"} onClick={closeSideMenu}>
        <span>{item.label}</span>
              </Link>
        {item.children && <IoIosArrowDown className={`text-xs transition-all ${isSubItemOpen && "rotate-180"} `} />}
      </p>
      {isSubItemOpen && item.children && (
        <div className="w-auto flex-col gap-1 bg-white py-1 transition-all">
          {item.children.map((subChild, index) => (
            <p key={index} className="flex pl-4">
              {item.iconImage && <Image src={subChild.iconImage} alt="item-icon" />}
              <Link href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 text-neutral-700 hover:text-black pl-1">
                <span>{subChild.label}</span>
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
