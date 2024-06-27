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
      <header className="bg-primary text-primary-foreground px-4 lg:px-6 h-14 flex items-center justify-between">
        <div className="maindivi">
          <div className="containerip">
            <div
              className={`card card1 ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavigation('about')}
              style={{ backgroundColor: activeSection === 'about' ? 'gray' : 'initial' }}
            >
              <FontAwesomeIcon icon={faUserGraduate} size="2x" color='#f7cece' />
              <p className="heading">About</p>
            </div>
            <div
              className={`card card1 ${activeSection === 'mission' ? 'active' : ''}`}
              onClick={() => handleNavigation('mission')}
              style={{ backgroundColor: activeSection === 'mission' ? 'gray' : 'initial' }}
            >
              <FontAwesomeIcon icon={faUserGraduate} size="2x" color='#f7cece' />
              <p className="heading">Mission</p>
            </div>
            <div
              className={`card card1 ${activeSection === 'values' ? 'active' : ''}`}
              onClick={() => handleNavigation('values')}
              style={{ backgroundColor: activeSection === 'values' ? 'gray' : 'initial' }}
            >
              <FontAwesomeIcon icon={faSchool} size="2x" color='#f7cece' />
              <p className="heading">Values</p>
            </div>
            <div
              className={`card ${activeSection === 'campus' ? 'active' : ''}`}
              onClick={() => handleNavigation('campus')}
              style={{ backgroundColor: activeSection === 'campus' ? 'gray' : 'initial' }}
            >
              <FontAwesomeIcon icon={faBookOpen} size="2x" color='#d62a39' />
              <p className="heading">Campus</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex justify-center items-center">
        {activeSection === 'about' && (
          <section className="w-full py-12 md:py-24 lg:py-32 text-black">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Welcome to Acme Inc
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We are a leading provider of innovative solutions for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'mission' && (
          <section className="w-full py-12 md:py-24 lg:py-32 text-black">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Acme Inc is a leading provider of innovative solutions for businesses of all sizes. Our mission is
                    to empower our clients with the tools and technology they need to succeed in today's competitive
                    market.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'values' && (
          <section className="w-full py-12 md:py-24 lg:py-32 text-black">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Acme Inc values integrity, innovation, and excellence in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'campus' && (
          <section className="w-full py-12 md:py-24 lg:py-32 text-black">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Campus Life</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Experience life on our vibrant campus with state-of-the-art facilities and a rich academic environment.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">Terms of Service</a>
          <a href="#" className="text-xs hover:underline underline-offset-4">Privacy</a>
        </nav>
      </footer>
    </div>
  );
}
