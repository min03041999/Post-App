import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineAlignLeft, AiOutlineInfoCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

import Dropdown from "../component/Dropdown";
import DropdownItem from "../component/DropdownItem";

import Routes from "../Config/Admin/RoutesAdmin.js";
import { logout } from "../store/auth";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  const dropdownItem = [
    {
      icon: <AiOutlineInfoCircle />,
      display: "Info",
      click: () => {
        console.log("123");
      },
    },
    {
      icon: <BiLogOut />,
      display: "Logout",
      click: () => {
        dispatch(logout());
      },
    },
  ];

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
        <div>
          <Dropdown auth={auth}>
            {dropdownItem.map((e, i) => (
              <DropdownItem key={i} onClick={e.click}>
                {e.icon}
                <span className="dropdown-item__display">{e.display}</span>
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
      </div>
      <div className="dashboard-navbar__body">
        <Routes />
      </div>
    </div>
  );
};

export default Navbar;
