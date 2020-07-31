import React from "react";
import { Link, Route } from "react-router-dom";
import Projects from "./Projects";
import "./style.css";

function Contact(props) {
  return (
    <div>
      <h1 className="text-center">Contact Information</h1>
      <div className="row">
        <div className="card text-center col">
          <div className="card-body">
            <h5 className="card-title"><strong>Résumé</strong></h5>
            <p className="card-text">Learn More About Me!</p>
            <a href="https://drive.google.com/file/d/1OAhgGaoLbwmUC7uDP2DQEaGAat0FK7Bp/view?usp=sharing" target="_blank" className="btn btn-info" id="rbut">Résumé</a>
          </div>
        </div>
        <div className="card text-center col">
          <div className="card-body">
            <h5 className="card-title"><strong>GitHub</strong></h5>
            <p className="card-text">GitHub and Repositories!</p>
            <a href="https://github.com/codelucid" target="_blank" className="btn btn-success" id="gbut">GitHub</a>
          </div>
        </div>
        <div className="card text-center col">
          <div className="card-body">
            <h5 className="card-title"><strong>LinkedIn</strong></h5>
            <p className="card-text">LinkedIn Profile!</p>
            <a href="https://www.linkedin.com/in/codelucid/" target="_blank" className="btn btn-primary" id="lbut">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to={`${props.match.url}/projects`} role="button" className="btn btn-link text-center">
          Projects Appear
        </Link>{" "}
        <Link to="/contact" role="button" className="btn btn-link text-center">
          Projects Disappear
        </Link>
        <Route exact path={`${props.match.url}/projects`} component={Projects} />
      </div>
    </div>

  );
}

export default Contact;
