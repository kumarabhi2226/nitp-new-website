/** @format */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./navbar.css";
import logo from "../assets/images/logo.svg";
import calendarImage from "../assets/images/icon-calendar.svg";
import remindersImage from "../assets/images/icon-reminders.svg";
import planningImage from "../assets/images/icon-planning.svg";
import About from "../assets/images/about.svg";
import Value from "../assets/images/value.svg";
import Mission from "../assets/images/mission.svg";
import { TbHome } from "react-icons/tb";


import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  
  {
    label: <TbHome />,
    link: "/",
  },
  {
    label: "Institue",
    link: "#",
    children: [
      
      { 
        label: "About", 
        link: "#", 
        iconImage: About,
       
      },
      { 
        label: "Mission and Vision", 
        link: "#", 
        iconImage: Mission,
      },
      { 
        label: "Values", 
        link: "#", 
        iconImage: Value,
       
      },
      { 
        label: "Campus", 
        link: "#", 
        iconImage: planningImage,
      },
      { 
        label: "Resources", 
        link: "#", 
        iconImage: planningImage,
        
      },
    ],
  },
  {
    label: "Adminstration",
    link: "#",
    children: [
      { 
        label: "History", 
        link: "#" 
      },
      { 
        label: "Our Team", 
        link: "#" 
      },
      { 
        label: "Blog", 
        link: "#" 
      },
    ],
  },
  { label: "Academics", link: "#" ,
    children: [
      { 
        label: "History", 
        link: "#",
        children: [
          { label: "Sub Feature 3", link: "#" },
          { label: "Sub Feature 3", link: "#" },
          { label: "Sub Feature 3", link: "#" },
          
        ], 
      },
      { 
        label: "Our Team", 
        link: "#" 
      },
      { 
        label: "Blog", 
        link: "#" 
      },
    ],
  },
  { label: "Faculty & Staff", link: "#" ,
    children: [
      { 
        label: "History", 
        link: "#" 
      },
      { 
        label: "Our Team", 
        link: "#" 
      },
      { 
        label: "Blog", 
        link: "#" 
      },
    ],
  },
  { label: "Facilities", link: "#",
    children: [
      { 
        label: "History", 
        link: "#" 
      },
      { 
        label: "Our Team", 
        link: "#" 
      },
      { 
        label: "Blog", 
        link: "#" 
      },
    ],
   },
  { label: "Students", link: "#" ,
    children: [
      { 
        label: "History", 
        link: "#" 
      },
      { 
        label: "Our Team", 
        link: "#" 
      },
      { 
        label: "Blog", 
        link: "#" 
      },
    ],
  },
];


export default function Navbar() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

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
    <div className={`mobiletest navbar-container ${isSticky ? "sticky-nav" : ""}`}>
      <div className="header-top mx-auto flex w-full max-w-9xl justify-between px-4 py-1 bg-white/40 backdrop-blur-lg shadow-lg">
        <div className="right-content">
          <div className="font-bold textmob">राष्ट्रीय प्रौद्योगिकी संस्थान पटना</div>
          <div className="text-sm textmob">NATIONAL INSTITUTE OF TECHNOLOGY PATNA</div>
        </div>
        <div className="left-content flex">
          <Image src={logo} alt="NIT PATNA" height={70} />
        </div>
        <div className="institute-info pt-4 hidden md:block">
          <div>An Institute of National Importance under Ministry of Education</div>
          <div>(Shiksha Mantralaya), Government of India</div>
        </div>
      </div>

      <div className="desktopnav mx-auto flex w-full max-w-7xl justify-center px-4 py-1 text-sm bg-white/40 md:bg-[#811919] backdrop-blur-lg md:rounded-xl shadow-lg">
        <section className="nav-items hidden md:flex">
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </section>
        <FiMenu onClick={() => setSideMenuOpen(true)} className="cursor-pointer text-4xl md:hidden" />
      </div>

      {isSideMenuOpen && <MobileNav closeSideMenu={() => setSideMenuOpen(false)} />}
    </div>
  );
}



function MobileNav({ closeSideMenu }) {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav-content">
        <AiOutlineClose onClick={closeSideMenu} className="mobile-nav-close text-4xl" />
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((item, index) => (
            <SingleNavItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Link href={item.link ?? "#"} className="flex cursor-pointer items-center gap-2 px-10 py-3 text-white	 transition-all group-hover:text-red-200">
        <span>{item.label}</span>
        {item.children && <IoIosArrowDown className={`transition-all ${isOpen ? "rotate-180" : ""}`} />}
      </Link>
      {item.children && (
        <div className={`absolute right-0 top-10 w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all ${isOpen ? "flex" : "hidden"}`}>
          {item.children.map((child, index) => (
            <div key={index} className="relative group">
              <Link href={child.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-500 hover:text-red-600">
                {child.iconImage && <Image src={child.iconImage} alt="item-icon" />}
                <span className="whitespace-nowrap pl-3">{child.label}</span>
                {child.children && <IoIosArrowDown className="ml-auto transition-all group-hover:rotate-180" />}
              </Link>
              {child.children && (
                <div className="absolute left-full top-0 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {child.children.map((subChild, subIndex) => (
                    <Link key={subIndex} href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-orange-400	 hover:text-red-600">
                      <span className="whitespace-nowrap pl-3">{subChild.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


function SingleNavItem({ item }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);

  return (
    <div ref={animationParent} className="relative px-2 py-3 transition-all">
      <p onClick={() => setItemOpen(!isItemOpen)} className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{item.label}</span>
        {item.children && <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />}
      </p>
      {isItemOpen && item.children && (
        <div className="w-auto flex-col gap-1  bg-white py-3 transition-all flex">
          {item.children.map((child, index) => (
            <div key={index}>
              <Link href={child.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
                {child.iconImage && <Image src={child.iconImage} alt="item-icon" />}
                <span className="whitespace-nowrap pl-3">{child.label}</span>
                {child.children && <IoIosArrowDown className="ml-auto transition-all group-hover:rotate-180" />}
              </Link>
              {isItemOpen && child.children && (
                <div className="flex flex-col gap-1 bg-white py-3 transition-all pl-8">
                  {child.children.map((subChild, subIndex) => (
                    <Link key={subIndex} href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 text-neutral-400 hover:text-black">
                      <span className="whitespace-nowrap">{subChild.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
