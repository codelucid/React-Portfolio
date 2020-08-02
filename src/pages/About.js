import React from "react";
import Mountain from "../components/Mountain";

function About() {
  return (
    <div>
      <Mountain backgroundImage="/images/mountain.png">
      <h1 className="text-center">Cooper Healey</h1>
      <p className="text-center">As a native North Carolinian, I enjoy new challenges and helping people in the Raleigh/Durham/Chapel Hill areas.
      {" "}<span class="btn-info">UNC's Coding Boot Camp</span> is teaching me so many new skills--HTML, JavaScript, CSS, 
      jQuery, Node.js, ES6, mySQL, MongoDB, Mongoose, and React just to name a few! 
      I am really looking forward to applying my new knowledge, as a Full Stack Developer, 
      with a local company in the community.</p>
      <p className="text-center">Phone: 919-414-2878</p>
      <p className="text-center" >Email: coophealey@gmail.com</p>
      </Mountain>
    </div>
  );
}

export default About;
