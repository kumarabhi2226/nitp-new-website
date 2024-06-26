import { useState } from "react";
import "./styles/Webcard.css";

const WebCard = ({ name, email, extn, interests, image, desg, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const urls = url.split(" & ");
  const linkedinUrl = urls[0] || "#";
  const githubUrl = urls[1] || "#";
  const interestArray = interests.split(" && ");
  const interestText = interestArray[0];
  const skills = interestArray.slice(1).map(skill => skill.trim());

  return (
    <div
      className="card-container-w"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="round" src={image} alt={name} />
      <h3 className="h3w">{name}</h3>
      <h6 className="h6w">{desg}</h6>
      <h6 className="email">{email}</h6>
      <br></br>
      <div className="buttons">
        <a href={linkedinUrl} className="primary">LinkedIn</a>
        <a href={githubUrl} className="primary ghost">GitHub</a>
      </div>
      <div className="skills">
        <h6 className="h6w">Skills</h6>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      </div>
      {isHovered && <p className="interests">{interestText}</p>}
    </div>
  );
};

export default WebCard;
