import React from "react";
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";

function Projects(props) {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <p className="text-center">
        Here are some of the projects I have worked on!
      </p>
      <Wrapper>
     <ProjectCard/>
     </Wrapper>
    </div>
  );
}

export default Projects;
