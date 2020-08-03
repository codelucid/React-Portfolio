import React from "react";
import "./style.css";

function ProfilePic(props) {
  return (
    
    <div className="card" id="profilePic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${props.backgroundImage})` }}>
    </div>
    
  );
}

export default ProfilePic;