import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNavebarList = (props) => {
  const navigateHandler = () => {
    props.onClick(props.listName);
  };

  return (
    <li className="sidenav-hover" onClick={navigateHandler}>
      <FontAwesomeIcon icon={props.icon} style={{ color: `${props.color}` }} />
      <p style={{ color: `${props.color}` }}>{props.listName}</p>
    </li>
  );
};

export default SideNavebarList;
