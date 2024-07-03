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
import Resource from "../../assets/images/resource.svg"
import Director from "../../assets/images/director.svg"
import Person from "../../assets/images/person.svg"
import President from "../../assets/images/president.svg"
import Sperson from "../../assets/images/sperson.svg"
import useNavigationEvent from "./useNavigationEvent"
import { useRouter } from 'next/navigation';
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
        label: "Resources", 
        link: "#", 
        iconImage: Resource,
        
      },
    ],
  },
  {
    label: "Administration",
    link: "#",
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
    link: "#",
    mlabel:"Academics",
    children: [
      {
        label: "Programmes",
        link: "#"
        
      },
      {
        label: "Departments",
        link: "#",
        mlabel:"Departments",
        children: [
          { label: "Architecture & Planning", link: "/department/arch/faculty"},
          { label: "Chemistry", link: "/department/chem/faculty" },
          { label: "Civil Engineering", link: "/department/ce/faculty" },
          { label: "Computer Science and Engineering", link: "/department/cse/faculty" },
          { label: "Electrical Engineering", link: "/department/ee/faculty" },
          { label: "Electronics and Communication Engineering", link: "/department/ece/faculty" },
          { label: "Humanities & Social Sciences", link: "/department/hss/faculty" },
          { label: "Mathematics", link: "/department/math/faculty" },
          { label: "Mechanical Engineering", link: "/department/me/faculty" },
          { label: "Physics", link: "/department/physics/faculty" },
        ],
      },
      {
        label: "Course Structure",
        link: "#",
        children: [
          { label: "UG", link: ""},
          { label: "PG(M. tech / MURP)", link: ""},
          { label: "M.tech/MURP-PHD(DD)", link: ""},
          { label: "Integrated M.Sc", link: ""},
          { label: "MCA", link: ""}
        ]
      },
      {
        label: "Admission",
        link: "/Academic/Admission?tab=JoSAA",
        children: [
          { label: "Study in India (SII)", link: "/Academic/Admission?tab=SII"},
          { label: "CMCT/JoSSA/CSAB", link: "/Academic/Admission?tab=JoSAA"},
          { label: "Relaxation Criteria", link: "/Academic/Admission?tab=Relaxation"},
        ]
      },
      {
        label: "Academic Notices",
        link: "/Notices/Academic",
      },
      {
        label: "Academic Calendar",
        link: "https://drive.google.com/file/d/1tVgQSygS8GRTZIglbVWVClasegdd6BCi/view",
      },
      {
        label: "Fee Structure",
        link: "/Academic/Fee",
      },
      {
        label: "Format of Official Documents",
        link: "/Academic/Format",
      },
    
      {
        label: "Centre of Excellence",
        link: "#",
        children: [
          { label: "TSSC", link: "/Academic/ISRO"},
          { label: "ISRO RACS", link: "/Academic/TSSC"},
        ]
      },
      // {
      //   label: "ICT Academy",
      //   link: "#",
      // },
      {
        label: "BIS Dashboard",
        link: "/Academic/BIS",
      },
      {
        label: "Digital Intiatives",
        link: "/Academic/DI",
      },
      {
        label: "Regulation & Curricula",
        link: "/Academic/Curriculam",
      },
    ],
  },
  {
    label: "Faculty & Staff",
    link: "#",
    children: [
      {
        label: "Web Mail",
        link: "http://mail.google.com/a/nitp.ac.in",
      },
      {
        label: "Academic Portal",
        link: "http://exam.nitp.ac.in:9001/",
      },
      {
        label: "Recruitments",
        link: "/Notices/JobsNITP",
      },
      {
        label: "Employee I-Card",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSedy0aZLXXj709zQjAejWvLQOs4_6ESIciPe0IV199kMr_D1g/viewform?usp=sf_link",
      },
      {
        label: "Staff Claim Form",
        link: "/Institute/Forms-",
      },
      {
        label: "Admin Login",
        link: "https://admin.nitp.ac.in/",
      },
      {
        label: "International Affairs",
        link: "#",
      },
      {
        label: "All Faculty Profile",
        link: "#",
      },
      {
        label: "Officers",
        link: "#",
      },
      {
        label: "Other Employee",
        link: "#",
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
      },
      {
        label: "Student I-Card",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc5_x34TMtQdMaW2Ad9Nvsmz1N8YXdAGJHtAM5kn3a850Ekyw/viewform",
      },
      {
        label: "Fee Payment",
        link: "https://paydirect.eduqfix.com/app/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466",
      },
      {
        label: "Clubs/Socities",
        link: "/Student/Clubs",
      },
      {
        label: "1st Year Student",
        link: "/Student/StudentFirstYear",
      },
      {
        label: "Student Activity Center",
        link: "/Student/SAC",
      },
      {
        label: "Fellowship Opportunities",
        link: "/Student/FellowshipOpportunites",
      },
      {
        label: "Scholarship",
        link: "/Student/Scholarship",
      },
      {
        label: "Student I-Card",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc5_x34TMtQdMaW2Ad9Nvsmz1N8YXdAGJHtAM5kn3a850Ekyw/viewform",
      },
      {
        label: " Tech Fest",
        link: "/Student/TechFest",
      },
      {
        label: "Sports",
        link: "#",
      },
      {
        label: "Student Exchange",
        link: "/Student/StudentExchange",
      },
      {
        label: "NSS@NITP",
        link: "/Student/NSS",
      },
      {
        label: "E-Cell",
        link: "/Student/E-Cell",
      },
      {
        label: "Unnat Bharat",
        link: "/Student/UnnatBharat",
      },
      {
        label: "Chanakya Portal",
        link: "http://exam.nitp.ac.in:9001/default.aspx?ReturnUrl=%2f",
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
      },
      {
        label: "IT Service Unit",
        link: "/Facilities/ITServiceUnit",
      },
      {
        label: "TEQUIP",
        link: "/Facilities/TEQUIP",
      },
      {
        label: "Library",
        link: "/Facilities/Library",
      },
      {
        label: "Medical Facilities",
        link: "/Facilities/MedicalFacilities",
      },
      {
        label: "Sports Facilities",
        link: "/Facilities/SportsFacilities",
      },
      {
        label: "Incubation Center",
        link: "https://web.nitp.ac.in/incubation_center/index.html",
      },
      {
        label: "Hostel & Mess",
        link: "/Facilities/Hostel",
      },
      {
        label: "Laboratories",
        link: "/Facilities/Laboratories",
      },
      {
        label: "Bank",
        link: "/Facilities/Bank",
      },
      {
        label: "Security",
        link: "/Facilities/Security",
      },
      {
        label: "Women Cell",
        link: "/Facilities/WomenCell",
      },
      {
        label: "SC/ST Cell",
        link: "/Facilities/SC_ST_Cell",
      },
      {
        label: "EMU",
        link: "/Facilities/EMU",
      },
      {
        label: "ESU",
        link: "/Facilities/ESU",
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
      
      <Link href={item.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-500 hover:text-red-600">
        {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
        <span className="whitespace-nowrap pl-3">{item.label}</span>
        {item.children && <IoIosArrowDropright className={`ml-auto transition-all ${isSOpen ? "rotate-180" : ""}`} />}
      </Link>
      
      {item.children && (
        
        <div className={`absolute left-full top-0  w-auto flex-col gap-1 rounded-lg bg-white  shadow-md transition-all ${isSOpen ? "flex" : "hidden"}`}>
          <div className="border-solid border-2 border-red-800 m-4 p-2 rounded-lg	">
          {item.children.map((subChild, subIndex) => (
            <Link key={subIndex} href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-600 hover:text-red-600">
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
        <div className="w-auto flex-col gap-1  bg-white py-3 transition-all flex">
          {item.children.map((child, index) => (
            <SubSidemenu key={index} item={child}/>
          ))}
        </div>
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
      <p onClick={handleSubToggle} className="flex cursor-pointer items-center gap-1 text-neutral-600 group-hover:text-black">
      {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
        <Link href={item.link ?? "#"} onClick={closeSideMenu}>
        <span>{item.label}</span>
              </Link>
        {item.children && <IoIosArrowDown className={`text-xs transition-all ${isSubItemOpen && "rotate-180"} `} />}
      </p>
      {isSubItemOpen && item.children && (
        <div className="w-auto flex-col gap-1 bg-white py-1 transition-all">
          {item.children.map((subChild, index) => (
            <div key={index} className="pl-4">
              {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
              <Link href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 text-neutral-400 hover:text-black">
                <span>{subChild.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
