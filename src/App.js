import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

import projects from "./projects.json";


{/* <Header />
<Project />
<Footer /> */}
class App extends Component {

  state = {
    projects
  };

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          
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
         

        </div>
      </Router>
    );
  }
}

export default App;
