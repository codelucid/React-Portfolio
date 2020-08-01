import React from "react";
import "./style.css";

function Mountain(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Mountain;