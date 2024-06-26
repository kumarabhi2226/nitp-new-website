"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import WebCard from "../components/WebCard";
import "./wpage.css";

const years = [2021, 2022, 2023, 2024];

const Webteam = () => {
  const [webteam, setWebteam] = useState([]);
  const [filteredteam, setFilteredteam] = useState([]);
  const [year, setYear] = useState(2024); // Set initial year to 2024
  const [view, setView] = useState("maintainers");

  useEffect(() => {
    const webteamUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/webteam`;

    axios.get(webteamUrl)
      .then(res => {
        const web = res.data;
        setWebteam(web);
        let filtered = web.filter(member => member.year === year);
        setFilteredteam(filtered);
      })
      .catch(e => {
        console.log(e);
      });
  }, [year]);

  return (
    <div className="pageLayout">
      <h1 className="text-black h1w">Web Team</h1>
      <h2 className="text-black h2w">The Team behind the website of NIT Patna</h2>

      <div className="buttonGroupw">
        <button
          onClick={() => setView("maintainers")}
          className={view === "maintainers" ? "btnActive" : ""}
        >
          Maintainers
        </button>
        <button
          onClick={() => {
            setView("developers");
            setYear(2021);
          }}
          className={view === "developers" ? "btnActive" : ""}
        >
          Developers
        </button>
      </div>

      {view === "maintainers" && (
        <div className="yearButtons">
          {years.map(item => (
            <button
              key={item}
              onClick={() => setYear(item)}
              className={year === item ? "btnActive" : ""}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <div className="cardContainerw">
        {filteredteam
          .filter(member => member.role === (view === "maintainers" ? "volunteer" : "developer"))
          .map(member => (
            <WebCard
              key={member.email}
              name={member.name}
              email={member.email}
              extn={member.ext_no}
              interests={member.interests}
              image={member.image}
              desg={member.desg}
              url={member.url}
            />
          ))}
      </div>
    </div>
  );
};

export default Webteam;
