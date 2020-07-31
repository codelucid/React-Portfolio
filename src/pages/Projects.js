import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";

class Projects extends Component {
  state = {
    projects
  };

  removeProject = id => {
    const projects = this.state.projects.filter(project => project.id !== id);
    this.setState({ projects });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Projects</h1>
        <p className="text-center">
          Here are some of the projects I have worked on!
      </p>
        <Wrapper>
          {this.state.projects.map(project => (
            <ProjectCard
              removeProject={this.removeProject}
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              linkDeployed={project.linkDeployed}
              linkGithub={project.linkGithub}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Projects;
