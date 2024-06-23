/** @format */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./navbar.css";
import logo from "../assets/images/logo.svg";
import todoImage from "../assets/images/icon-todo.svg";
import calendarImage from "../assets/images/icon-calendar.svg";
import remindersImage from "../assets/images/icon-reminders.svg";
import planningImage from "../assets/images/icon-planning.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  {
    label: "Features",
    link: "#",
    children: [
      { label: "Todo list", link: "#", iconImage: todoImage },
      { label: "Calendar", link: "#", iconImage: calendarImage },
      { label: "Reminders", link: "#", iconImage: remindersImage },
      { label: "Planning", link: "#", iconImage: planningImage },
    ],
  },
  {
    label: "Company",
    link: "#",
    children: [
      { label: "History", link: "#" },
      { label: "Our Team", link: "#" },
      { label: "Blog", link: "#" },
    ],
  },
  { label: "Careers", link: "#" },
  { label: "About", link: "#" },
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
        <div className="institute-info hidden md:block">
          <div>An Institute of National Importance under Ministry of Education</div>
          <div>(Shiksha Mantralaya), Government of India</div>
        </div>
      </div>

      <div className="desktopnav mx-auto flex w-full max-w-7xl justify-center px-4 py-1 text-sm bg-white/40 backdrop-blur-lg md:rounded-xl shadow-lg">
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

function NavItem({ item }) {
  return (
    <Link href={item.link ?? "#"} className="relative group px-2 py-3 transition-all">
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{item.label}</span>
        {item.children && <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />}
      </p>
      {item.children && (
        <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
          {item.children.map((child, index) => (
            <Link key={index} href={child.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
              {child.iconImage && <Image src={child.iconImage} alt="item-icon" />}
              <span className="whitespace-nowrap pl-3">{child.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
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
            <Link key={index} href={child.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black">
              {child.iconImage && <Image src={child.iconImage} alt="item-icon" />}
              <span className="whitespace-nowrap pl-3">{child.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
