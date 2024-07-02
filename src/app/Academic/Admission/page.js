"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faGlobe,faBoxArchive,faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';


import './style.css';


export default function InstitutePage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialTab = searchParams.get('tab') || 'SII';
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
    <div className="flex flex-col maincont1 bg-white bg-opacity-50">
      <header className="bg-primary text-primary-foreground px-4 lg:px-5 h-14 flex items-center justify-between">
        <div className="maindivi">
          <div className="containerip">
            <div
              className={`cardacad cardacad1 ${activeSection === 'SII' ? 'active' : ''}`}
              onClick={() => handleNavigation('SII')}
              style={{ backgroundColor: activeSection === 'SII' ? 'white' : 'initial' }}
            ><FontAwesomeIcon  icon={faGlobe} size="2x" color='#d62a39' />
              
              <p className="heading">SII</p>
            </div>
            <div
              className={`cardacad cardacad1 ${activeSection === 'JoSAA' ? 'active' : ''}`}
              onClick={() => handleNavigation('JoSAA')}
              style={{ backgroundColor: activeSection === 'JoSAA' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faUserGraduate} size="2x" color='#d62a39' />
              <p className="heading">JoSAA</p>
            </div>
            <div
              className={`cardacad cardacad1 ${activeSection === 'Relaxation' ? 'active' : ''}`}
              onClick={() => handleNavigation('Relaxation')}
              style={{ backgroundColor: activeSection === 'Relaxation' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faIndianRupeeSign} size="2x" color='#d62a39' />
              <p className="heading">Relaxation</p>
            </div>
            <div
              className={`cardacad cardacad1 ${activeSection === 'Archieve' ? 'active' : ''}`}
              onClick={() => handleNavigation('Archieve')}
              style={{ backgroundColor: activeSection === 'Archieve' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faBoxArchive} size="2x" color='#d62a39' />
              <p className="heading">Archieve</p>
            </div>
          </div>
        </div>
      </header>
      <div className='detailcontainer'>
      <div className="flex-1 flex justify-center items-center">
        {activeSection === 'SII' && (
          <section className=" text-black">
           
          <div className="admission-info">
          <h1 className="section-title-heading text-red-800 " >Admission in UG/PG/PhD programme through Study In India (SII)</h1>
      <h2 className="section-title text-red-950">Admission Requirements</h2>

      

      <div className="requirements-container">
        <div className="requirement">
          <h3>Minimum Qualifications</h3>
          <ul>
            <li className='pt-3'>
              <strong>B.Tech/DD(B.Tech+M.Tech)/B.Arch Programme:</strong> PCM with
              65% or Diploma in Relevant branch with 65% Valid JEE(Main) score or
              Institute level Written Test/Interview
            </li>
            <li className='pt-2'>
              <strong>M.Tech/M.Arch/MURP Programme:</strong> UG in any branch
              with 65% along with Valid GATE Score in relevant GATE paper or
              Institute level Written Test/Interview
            </li>
            <li className='pt-2'>
              <strong>PhD:</strong> PG in any branch with 65% along with Valid
              GATE Score in relevant GATE paper or Institute level Written
              Test/Interview
            </li>
          </ul>
        </div>

        <div className="requirement">
          <h3 className="section-title text-red-950">Admission Schedule</h3>
          <ul>
            <li>Last date of registration: 25 June 2024</li>
            <li>Last date of Scrutiny of applications (select/Reject): 27 June 2024, 5 PM</li>
            <li>Missing documents to be uploaded: 28 June 2024, 5 PM</li>
            <li>Last date of confirmation for sending admission letter: 28 June 2024</li>
          </ul>
        </div>
      </div>

      <h2 className="section-title pt-9 text-red-950">Course Fees</h2>

      <table className="course-fees">
        <thead>
          <tr>
            <th>Course</th>
            <th>Annual Tuition Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Tech / BArch / MTech / March / MURP / PhD</td>
            <td>
              <div className="fee-container">
                <div>SAARC Country: $5000 per annum</div>
                <div>Non-SAARC Country: $8000 per annum</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Total Annual Tuition Fee*</td>
            <td>
              <div className="fee-container">
                <div>SAARC Country: $6779 per annum</div>
                <div>Non-SAARC Country: $9779 per annum</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Miscellaneous Cost (if any)</td>
            <td>$100 for all</td>
          </tr>
        </tbody>
      </table>
    </div>
        </section>
        )}
        {activeSection === 'JoSAA' && (
          <section className=" text-black">
          
          <div className="admission-info">
          
       
          <h1 className="section-title-heading text-red-800 " >For Admissions in B.Tech./Dual Degree/B.Arch. [ JoSAA Counselling 2024 ]</h1>
      
      <h2 className=" section-title-heading section-title md:m-20 md:mb-0 md:mt-5">Admission Guidelines</h2>

      <div className="requirements-container">
        <div className="">
          <h3></h3>
          <ul>
            <li className='pt-5 md:m-20 md:mb-0 md:mt-0'>
              <strong>JoSSA/CSAB website : </strong> 
              The prospective candidates are advised to visit the JoSSA/CSAB website regularly for updates and other details regarding the online counseling process.
              <a href='https://josaa.nic.in/' target='_blank' className='text-neutral-500'> JoSSA Website</a>


            </li>
            <li className='pt-5 md:pb-10 md:m-20 md:mt-8 md:mb-1'>
              <strong>Contact Details : </strong>(Email ID: acad.help@nitp.ac.in Contact: 0612 2372715 Extension no 166) Center In-charge: Prof. Sanjeev Sinha Contact: 0612-2372715 (Ext. 151), Dy. Center In-charge: Prof. M P Singh, 0612-2372715 (Ext-201.) and Dy.Center In-Charge: Prof. Bharat Gupta 0612-2372715 (Ext-301.)
            </li>
            
          </ul>
        </div>
        <h1 className="section-title-heading text-red-800 mt-1" >For Admissions in M.Tech./M.Arch./M.Plan. (CCMT-2024),CCMT Counselling 2024</h1>
      
      <h2 className=" section-title-heading section-title md:m-20 md:mb-0 md:mt-1">Admission Guidelines</h2>

      <div className="requirements-container">
        <div className="">
          <h3></h3>
          <ul>
            <li className='pt-5 md:m-20 md:mb-0 md:mt-1'>
              <strong>CCMT website : </strong> 
              The prospective candidates are advised to visit the CCMT website regularly for updates and other details regarding the online counseling process.
              <a href='https://ccmt.admissions.nic.in/' target='_blank' className='text-neutral-500'> CCMT Website</a>


            </li>
            <li className='pt-5 md:pb-10 md:m-20 md:mt-8 md:mb-7'>
              <strong>Contact Details : </strong>(Email ID: acad.help@nitp.ac.in Contact: 0612 2371715 Extension no 172) PI In-charge: Prof. M. P. Singh Contact: 0612-2372715 (Ext. 172), acad.help@nitp.ac.in PI Co In-charge: Prof. A R Quaff, 0612-2372715 (Ext. 171), arquaff@nitp.ac.in
              Fee Details: Link-1
            </li>
            
          </ul>
        </div>

        
     

      
    </div>

        
      </div>

      
    </div>
        </section>
        )}
        {activeSection === 'Relaxation' && (
          <section className=" text-black">
          
          <div className="admission-info">
          
       
          <h1 className="section-title-heading1 text-red-800 " >Concessions</h1>
      
      <h2 className=" section-title-heading1 section-title1  text-red-800">
      Concessions Provided for Students 
</h2>
<h2 className=" section-title-heading1 section-title1 text-lg pb-0 mb-0">
Relaxation in minimum eligibilities:
</h2>

      <div className="requirements-container pt-0 mt-0">
        <div className="">
          <h3></h3>
          <ul>
            <li className=''>
            15% seats are reserved for SC and 7.5% for ST candidates.


            </li>
            <li className=''>
            3% seats are reserved for PH candidates.
            </li>
            <li className=' '>
            27% seats are reserved for OBC candidates.
            </li>
            
          </ul>
        </div>
        </div>

        <h2 className=" section-title-heading1 section-title1  text-red-800 pt-5">
        Concessions Provided for Staff
        
</h2>

      <div className="requirements-container">
        <div className="">
          <h3></h3>
          <ul>
            <li className=''>
            Reservation in appointment and promotion to SC/ST/PH candidates as per Govt. of India rule is applicable at this Institute. Concession in application fee for appointment and age relaxation is also applicable at this Institute as per Govt. of India rules.
            </li>
            
            
          </ul>
        </div>
        
     

      
 

        
      </div>

      
    </div>
        </section>
        )}
        {activeSection === 'Archieve' && (
          <section className=" text-black">
          <h1>Archieve section</h1>
        </section>
        )}
        
      </div>
      </div>
      
    </div>
  );
}
