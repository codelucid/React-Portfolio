import React, { Component } from "react";

class Navbar extends Component {
    
    componentDidMount() {

        const M = window.M;

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    }
    
    
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <a href="https://codelucid.github.io/Portfolio/" target="_blank" className="brand-logo">Cooper Healey</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="https://github.com/codelucid" target="_blank">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/codelucid/" target="_blank">Linked-In</a></li>
                            <li><a href="https://drive.google.com/file/d/1OAhgGaoLbwmUC7uDP2DQEaGAat0FK7Bp/view?usp=sharing" target="_blank">Resume</a></li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg" />
                        </div>
                        <a href="#user"><img className="circle" src="profilePic.png" /></a>
                        <a href="#name"><span className="white-text name">Cooper Healey</span></a>
                        <a href="#email"><span className="white-text email">coophealey@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
               
            </div>
        )
    }
}
export default Navbar;