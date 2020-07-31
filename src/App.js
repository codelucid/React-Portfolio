import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import ProjectCard from "./components/ProjectCard";
import projects from "./projects.json";


{/* <Header />
<Project />
<Footer /> */}
class App extends Component {

  state = {
    projects
  };

  removeProject = id => {
    const projects = this.state.projects.filter(project => project.id !== id);
    this.setState({ projects });
  };

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Wrapper>
          <Header>Coop's React Portfolio!</Header>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          
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
          <Footer>Thank you for visiting!</Footer>
        </div>
        
      </Router>
    );
  }
}

export default App;
