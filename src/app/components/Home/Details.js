"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./styles/Details.css";

// Noticecard Component
const Noticecard = ({ detail, time, attachments, imp, link }) => (
  <div className={`notice ${imp ? "important" : ""}`}>
    <h3>{detail}</h3>
    <p>{new Date(time).toLocaleDateString()}</p>
    {attachments && attachments.length > 0 && (
      <ul>
        {attachments.map((attachment, index) => (
          <li key={index}>
            {attachment.typeLink ? (
              <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                {attachment.caption}
              </a>
            ) : (
              <a href={attachment.url} download>
                {attachment.caption}
              </a>
            )}
          </li>
        ))}
      </ul>
    )}
    {link && <a href={link}>Read more</a>}
  </div>
);

// Eventcard Component
const Eventcard = ({ detail, time, attachments, location, event_link, link }) => (
  <div className="eventcard">
    <h3>{detail}</h3>
    <p>{time}</p>
    <p>{location}</p>
    {attachments && attachments.length > 0 && (
      <ul>
        {attachments.map((attachment, index) => (
          <li key={index}>
            {attachment.typeLink ? (
              <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                {attachment.caption}
              </a>
            ) : (
              <a href={attachment.url} download>
                {attachment.caption}
              </a>
            )}
          </li>
        ))}
      </ul>
    )}
    {event_link && <a href={event_link}>Event link</a>}
    {link && <a href={link}>Read more</a>}
  </div>
);

const Details = () => {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/events/active`;
        const response = await axios.get(eventsUrl);
        setEvents(response.data);
      } catch (e) {
        console.error("Error fetching events:", e);
      }
    };

    const fetchNotices = async () => {
      try {
        const noticesUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice/active`;
        const response = await axios.get(noticesUrl);
        setNotices(response.data.filter(notice => notice.isVisible === 1));
      } catch (e) {
        console.error("Error fetching notices:", e);
      }
    };

    const fetchAcademics = async () => {
      try {
        const academicsUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice/academics`;
        const response = await axios.get(academicsUrl);
        setAcademics(response.data.filter(notice => notice.isVisible === 1));
      } catch (e) {
        console.error("Error fetching academic notices:", e);
      }
    };

    fetchEvents();
    fetchNotices();
    fetchAcademics();
  }, []);

  return (
    <div className="container1">
      <div className="section">
        <div className="section-header">
          <h2>Notice</h2>
          <Link href="/notice">View all</Link>
        </div>
        <div className="section-content">
          {notices.length === 0 ? (
            <p>No notices available.</p>
          ) : (
            notices.map(notice => (
              <Noticecard
                detail={notice.title}
                time={notice.timestamp}
                key={notice.id}
                attachments={notice.attachments}
                imp={notice.important}
                link={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : ""}
              />
            ))
          )}
        </div>
      </div>
      <div className="section1">
      <div >
        <div className="section-header">
          <h2>Events</h2>
          <Link href="/event">View all</Link>
        </div>
        
      
      
        <div className="section-content">
          {events.length === 0 ? (
            <p>No events available.</p>
          ) : (
            events.map((event, index) => {
              const date = new Date(event.eventStartDate);
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              const cdate = new Date(event.eventEndDate);
              const cday = cdate.getDate();
              const cmonth = cdate.getMonth() + 1;
              const cyear = cdate.getFullYear();
              const monthname = date.toLocaleString("default", { month: "short" }).toUpperCase();
              return (
                <Eventcard
                  key={index}
                  detail={event.title}
                  time={`${day}-${month}-${year} - ${cday}-${cmonth}-${cyear}`}
                  attachments={event.attachments}
                  location={event.venue.substring(0, 60)}
                  event_link={event.event_link && JSON.parse(event.event_link).url || ""}
                  link={event.attachments.length !== 0 ? event.attachments[0].url : ""}
                />
              );
            })
          )}
        </div>
        
        </div>
      
      </div>
      
      <div className="section">
        <div className="section-header">
          <h2>Academic Notices</h2>
          <Link href="/academics?tab=Notices">View all</Link>
        </div>
        <div className="section-content">
          {academics.length === 0 ? (
            <p>No academic notices available.</p>
          ) : (
            academics.map(notice => (
              <Noticecard
                detail={notice.title}
                time={notice.timestamp}
                key={notice.id}
                attachments={notice.attachments}
                imp={notice.important}
                link={notice.notice_link && JSON.parse(notice.notice_link).url ? JSON.parse(notice.notice_link).url : ""}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
