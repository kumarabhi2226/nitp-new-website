"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faSchool, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Ipage.css';

export default function InstitutePage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialTab = searchParams.get('tab') || 'about';
  const [activeSection, setActiveSection] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tab !== activeSection) {
      setActiveSection(tab);
    }
  }, [searchParams]);

  const handleNavigation = (section) => {
    setActiveSection(section);
    updateURL(section);
  };

  const updateURL = (section) => {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', section);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground px-4 lg:px-5 h-14 flex items-center justify-between">
        <div className="maindivi">
          <div className="containerip">
            <div
              className={`cardins cardins1 ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavigation('about')}
              style={{ backgroundColor: activeSection === 'about' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faUserGraduate} size="2x" color='#d62a39' />
              <p className="heading">About</p>
            </div>
            <div
              className={`cardins cardins1 ${activeSection === 'mission' ? 'active' : ''}`}
              onClick={() => handleNavigation('mission')}
              style={{ backgroundColor: activeSection === 'mission' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faUserGraduate} size="2x" color='#d62a39' />
              <p className="heading">Mission</p>
            </div>
            <div
              className={`cardins cardins1 ${activeSection === 'values' ? 'active' : ''}`}
              onClick={() => handleNavigation('values')}
              style={{ backgroundColor: activeSection === 'values' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faSchool} size="2x" color='#d62a39' />
              <p className="heading">Values</p>
            </div>
            <div
              className={`cardins ${activeSection === 'campus' ? 'active' : ''}`}
              onClick={() => handleNavigation('campus')}
              style={{ backgroundColor: activeSection === 'campus' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faBookOpen} size="2x" color='#d62a39' />
              <p className="heading">Campus</p>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 flex justify-center items-center">
        {activeSection === 'about' && (
          <section className=" text-black">
          <h1>About section</h1>
        </section>
        )}
        {activeSection === 'mission' && (
          <section className=" text-black">
          <h1>Mission section</h1>
        </section>
        )}
        {activeSection === 'values' && (
          <section className=" text-black">
          <h1>Values section</h1>
        </section>
        )}
        {activeSection === 'campus' && (
         <section className=" text-black">
         <h1>Campus section</h1>
       </section>
        )}
      </div>
      
    </div>
  );
}
