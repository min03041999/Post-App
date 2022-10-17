import React from "react";

function DropdownItem(props) {
  return (
    <div className="dropdown-item" onClick={props.onClick}>
      <span>{props.children}</span>
    </div>
  );
}

export default DropdownItem;
