import React, { useState } from "react";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        {props.auth}
      </button>
      <div className={isOpen ? "dropdown-group active" : "dropdown-group"}>
        {props.children}
      </div>
    </div>
  );
};

export default Dropdown;
