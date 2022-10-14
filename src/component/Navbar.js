import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Navbar = (props) => {
  const { auth } = useSelector((state) => state.auth);
  return (
    <div className={`dashboard-navbar ${props.show ? "active" : ""}`}>
      <div className="dashboard-navbar__header">
        <div>
          {props.show ? (
            <button onClick={props.showSidebar}>
              <AiOutlineAlignLeft size={30} />
            </button>
          ) : (
            <button onClick={props.showSidebar}>
              <AiOutlineAlignLeft size={30} />
            </button>
          )}
        </div>
        <div>{auth}</div>
      </div>
    </div>
  );
};

export default Navbar;
