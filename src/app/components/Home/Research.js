
"use client"

import { useState, useEffect } from "react"
import "./styles/Research.css";
import Researchm from "../../assets/images/researchm.svg"

export default function Research() {
  const [recentJournals, setRecentJournals] = useState([])
  const [recentProjects, setRecentProjects] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const journalResponse = await fetch("YOUR_API_URL")
      const projectResponse = await fetch("YOUR_API_URL")
      setRecentJournals(await journalResponse.json())
      setRecentProjects(await projectResponse.json())
    }
    fetchData()
  }, [])
  return (
    <div className=" Reaserchdiv w-full px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-center mb-8">
        
      <div className="w-full h-0.5 mr-4 bg-neutral-700" />
       
        <img src={Researchm} alt="Research Icon" />
        <h2 className="text-3xl font-bold text-primary">RESEARCH HIGHLIGHTS</h2>
        <img src={Researchm} alt="Research Icon" />
        <div className="w-full h-0.5 bg-neutral-700 ml-4" />
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
          <ActivityIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
          <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Visitors</h3>
          <span className="text-2xl font-bold text-primary md:text-4xl">1.2K</span>
        </div>
        <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
          <ClipboardIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
          <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Journals</h3>
          <span className="text-2xl font-bold text-primary md:text-4xl">32</span>
        </div>
        <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
          <BriefcaseIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
          <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Projects</h3>
          <span className="text-2xl font-bold text-primary md:text-4xl">18</span>
        </div>
        <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
          <UsersIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
          <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Users</h3>
          <span className="text-2xl font-bold text-primary md:text-4xl">245</span>
        </div>
        <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
          <CpuIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
          <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Servers</h3>
          <span className="text-2xl font-bold text-primary md:text-4xl">12</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
          <div className="flex items-center mb-4 p-4">
            <ArrowLeftIcon className="w-6 h-6 text-primary" />
            <div className="w-8 h-0.5 bg-primary mr-4" />
            <h3 className="text-lg font-medium text-primary">Recent Journals</h3>
            <div className="w-8 h-0.5 bg-primary ml-4" />
            <ArrowRightIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {recentJournals.map((journal) => (
                <li key={journal.id} className="flex items-center gap-4">
                  <FileIcon className="w-6 h-6 text-muted-foreground" />
                  <div>
                    <h4 className="text-lg font-medium text-primary">{journal.title}</h4>
                    <p className="text-sm text-muted-foreground">{journal.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
          <div className="flex items-center mb-4 p-4">
            <ArrowLeftIcon className="w-6 h-6 text-primary" />
            <div className="w-8 h-0.5 bg-primary mr-4" />
            <h3 className="text-lg font-medium text-primary">Recent Projects</h3>
            <div className="w-8 h-0.5 bg-primary ml-4" />
            <ArrowRightIcon className="w-6 h-6 text-primary" />
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {recentProjects.map((project) => (
                <li key={project.id} className="flex items-center gap-4">
                  <BriefcaseIcon className="w-6 h-6 text-muted-foreground" />
                  <div>
                    <h4 className="text-lg font-medium text-primary">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


