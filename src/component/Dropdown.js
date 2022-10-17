import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (ref.current !== e.target) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, []);

  return (
    <div className="dropdown">
      <button
        ref={ref}
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
