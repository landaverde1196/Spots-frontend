import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.clicked}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
