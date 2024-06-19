"use client";
import React, { useState, useEffect } from 'react';
import './Footer.css';
const Footer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=25.5941&lon=85.1376&appid=${process.env.NEXT_PUBLIC_YOUR_API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchPollutionData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=25.5941&lon=85.1376&appid=${process.env.NEXT_PUBLIC_YOUR_API_KEY}`
      );
      const data = await response.json();
      setPollutionData(data);
    } catch (error) {
      console.error('Error fetching air pollution data:', error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchWeatherData();
    fetchPollutionData();

    // Fetch data every two minutes
    const interval = setInterval(() => {
      fetchWeatherData();
      fetchPollutionData();
    }, 120000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

// Helper function to format date and time
const formatDate = (date) => {
  return date.toLocaleString('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
  return (
    <footer className="fdiv bg-[#2e1a1a] text-white py-8">
      <div className="container3 mx-auto px-4 flex justify-between items-start flex-wrap">
        <div className="flex flex-col items-start">
          <img
            src="/placeholder.svg"
            alt="NIT Patna Logo"
            className="w-24 h-24 mb-2"
          />
          <p>National Institute of Technology Patna</p>
          <p>Ashok Rajpath, Mahendru, Patna, Bihar 800005</p>
          <p className="mt-4">
            <PhoneIcon className="inline-block mr-2" /> 0612-2371715
          </p>
          <p>
            <MailIcon className="inline-block mr-2" /> info@nitp.ac.in
          </p>
          <p>
            <GlobeIcon className="inline-block mr-2" /> www.nitp.ac.in
          </p>
          <div className="flex space-x-4 mt-4">
            <TwitterIcon className="w-6 h-6" />
            <LinkedinIcon className="w-6 h-6" />
            <FacebookIcon className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Departments
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Centres & CoEs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Schools
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Anti-Sexual Harassment Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Right to Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Office of Career Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Switch to Dark Mode
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Rules
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Campus Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Institute Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Educational Programmes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                PhD Seminar
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Climate Action Plan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold mb-4">
            <CloudIcon className="inline-block mr-2" /> Patna
          </h3>
          {weatherData && weatherData.list && weatherData.list.length > 0 ? (
            <>
              <p>{formatDate(currentDateTime)}</p>
              <p className="flex items-center mt-2">
                <CloudIcon className="inline-block mr-2" /> {weatherData.list[0].weather[0].description}
              </p>
              <p>Temp: {(weatherData.list[0].main.temp - 273.15).toFixed(2)}°C</p>
              <p>Humidity: {weatherData.list[0].main.humidity}% Wind: {weatherData.list[0].wind.speed} km/h</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          {pollutionData && pollutionData.list && pollutionData.list.length > 0 ? (
            <div className="mt-2 p-2 border rounded">
              <p>
                Air Pollution (PM2.5):{' '}
                <span className="text-green-500">
                  {pollutionData.list[0].components.pm2_5}{' '}
                  <HeartIcon className="inline-block" />
                </span>
              </p>
              <p className="text-xs">Source: openweather</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <h4 className="mt-4">Visitors:</h4>
          <div className="flex space-x-2 mt-2">
            <div className="p-2 border rounded">1</div>
            <div className="p-2 border rounded">4</div>
            <div className="p-2 border rounded">0</div>
            <div className="p-2 border rounded">0</div>
            <div className="p-2 border rounded">7</div>
            <div className="p-2 border rounded">1</div>
          </div>
        </div>
      </div>
      <div className="container3 mx-auto px-4 mt-8 border-t pt-4 flex justify-between items-center text-sm">
        <p>
          Copyright © 2024 National Institute of Technology Patna. All Rights Reserved.{' '}
          <a href="#" className="underline">
            Credits & Attributions
          </a>
        </p>
        <div className="flex items-center space-x-4">
          <a href="#" className="underline">
            Switch to Normal Version
          </a>
          <p>Developed & Maintained by WDC NIT Patna</p>
        </div>
      </div>
    </footer>
  );
};








function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default Footer
