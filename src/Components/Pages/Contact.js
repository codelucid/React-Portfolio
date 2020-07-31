import React from "react";
import { Link, Route } from "react-router-dom";
import Projects from "./Projects";
import "./style.css";

function Contact(props) {
  return (
    <div>
      <h1 className="text-center">Contact Page</h1>
      
      {/* <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card text-center">
              <div className="card-header">
                <h2><strong>Contact Information</strong></h2>
              </div>
              <div className="card-body">
                <h5 className="card-title"><strong>Résumé</strong></h5>
                <p className="card-text">Please learn more about my background!</p>
                <a href="https://drive.google.com/file/d/1OAhgGaoLbwmUC7uDP2DQEaGAat0FK7Bp/view?usp=sharing" target="_blank" className="btn btn-info" id="rbut">Résumé</a>
              </div>
            </div>
          </div>
        </div>
        <br>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body" style="text-align: center;">
                  <h5 className="card-title"><strong>GitHub</strong></h5>
                  <p className="card-text">Check out my GitHub and Repositories!</p>
                  <a href="https://github.com/codelucid" target="_blank" className="btn btn-success" id="gbut">GitHub</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body" style="text-align: center;">
                  <h5 className="card-title"><strong>Linked-In</strong></h5>
                  <p className="card-text">Check out my Linked-In!</p>
                  <a href="https://www.linkedin.com/in/codelucid/" target="_blank" className="btn btn-primary" id="lbut">Linked-In</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Link to={`${props.match.url}/projects`} role="button" className="btn btn-link text-center">
          Projects Appear
        </Link>{" "}
        <Link to="/contact" role="button" className="btn btn-link text-center">
          Projects Disappear
        </Link>
        <Route exact path={`${props.match.url}/projects`} component={Projects} />
    </div>
    
  );
}

export default Contact;
