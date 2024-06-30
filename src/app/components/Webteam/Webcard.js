import { useState } from "react";
import "./Webcard.css";

const WebCard = ({ name, email, extn, desg, image, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const urls = url.split(" & ");
  const linkedinUrl = urls[0] || "#";
  const githubUrl = urls[1] || "#";
  const interestArray = desg.split(" || ");
  const interestText = interestArray[0];
  const skills = interestArray.slice(0).map(desg => desg.trim());

  return (
    // <div
    //   classNameName="card-container-w"
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)} 
    // >
    //   <img classNameName="round" src={image} alt={name} />
    //   <h3 classNameName="h3w">{name}</h3>
    //   <h6 classNameName="h6w">{desg}</h6>
    //   <h6 classNameName="email">{email}</h6>
    //   <br></br>
    //   <div classNameName="buttons">
    //     <a href={linkedinUrl} classNameName="primary">LinkedIn</a>
    //     <a href={githubUrl} classNameName="primary ghost">GitHub</a>
    //   </div>
    //   <div classNameName="desg">
    //     <h6 classNameName="h6w">desg</h6>
    //     <ul>
    //       {skills.map((desg, index) => (
    //         <li key={index}>{desg.trim()}</li>
    //       ))}
    //     </ul>
    //   </div>
      
    // </div>
    <div classNameName="cardw text">
    <div className="imgw">
      <img className="imgw" src="https://drive.google.com/thumbnail?id=1EKfLtDVi2k8Ikb66d4kaxhIMDTDAslUK"/>
    </div>
    <div className="infos">
      <div className="namew">
        <h2>Bradley Steve</h2>
        <h4>@bradsteve</h4>
      </div>
      <p className="textw">
        I'm a Front End Developer, follow me to be the first 
        who see my new work.
      </p>
      <ul className="stats">
        <li>
          <h3>15K</h3>
          <h4>Views</h4>
        </li>
        <li>
          <h3>82</h3>
          <h4>Projects</h4>
        </li>
        <li>
          <h3>1.3M</h3>
          <h4>Followers</h4>
        </li>
      </ul>
      <div className="links">
        <button className="follow">Follow</button>
        <button className="view">View profile</button>
      </div>
    </div>
  </div>
  );
};

export default WebCard;
