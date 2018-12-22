import React from "react";
import "./header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Streak: {props.streak}
    </div>
  </div>
);

export default Header;