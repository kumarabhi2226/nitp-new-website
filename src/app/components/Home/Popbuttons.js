import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faGraduationCap, faSchool, faBookOpen, faBolt, faUsers, faCalendarAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './styles/Popbutton.css';
import Link from 'next/link';


const Popbuttons = () => {
  return (
    <div className='maindiv'>
      <div className='container'>
      <div className="card card1" >
      <Link href="/student" className="card card1">
          <FontAwesomeIcon icon={faUserGraduate} size="2x" color='#f7cece'/>
          <p className="heading">STUDENT</p>
        </Link>
      </div>
      <a href="https://alumini-nitp.vercel.app/" className="card" target="_blank" >
          <FontAwesomeIcon icon={faGraduationCap} size="2x" color='#BA210E' />
          <p className="heading heading1">ALUMNI</p>
        </a>
      <div className="card card1">
        <FontAwesomeIcon icon={faSchool} size="2x" color='#f7cece' />
        <p className="heading">ADMISSIONS</p>
      </div>
      <div className="card">
        <FontAwesomeIcon icon={faBookOpen} size="2x" color='#d62a39' />
        <p className="heading">MAGAZINE</p>
      </div>
      <div className="card">
        <FontAwesomeIcon icon={faBolt} size="2x" color='#d62a39' />
        <p className="heading">RECRUITMENT</p>
      </div>
      <div className="card card1">
        <FontAwesomeIcon icon={faUsers} size="2x" color='#f7cece' />
        <p className="heading">FACULTY & STAFF</p>
      </div>
      <div className="card">
        <FontAwesomeIcon icon={faCalendarAlt} size="2x" color='#d62a39' />
        <p className="heading">EVENTS</p>
      </div>
      <a href="https://tpc.nitp.ac.in/" className="card card1" target="_blank" >
        <FontAwesomeIcon icon={faBuilding} size="2x" color='#f7cece'/>
        <p className="heading heading1">TRAINING AND PLACEMENT</p>
      </a>

    </div>
    </div>
    
  );
}

export default Popbuttons;
