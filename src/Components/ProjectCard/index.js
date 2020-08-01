import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={`${process.env.PUBLIC_URL}${props.image}`} />
      </div>
      <div className="content">
        <ul className="text-center">
          <li>
            {props.name}
          </li>
          <li>
            <a href={props.linkDeployed}>Deployed Link</a>
          </li>
          <li>
            <a href={props.linkGithub}>Github Link</a>
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeProject(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ProjectCard;