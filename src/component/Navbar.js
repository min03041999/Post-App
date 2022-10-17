import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineAlignLeft,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";

import Dropdown from "../component/Dropdown";
import DropdownItem from "../component/DropdownItem";

import Routes from "../Config/Admin/RoutesAdmin.js";
import { logout } from "../store/auth";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  const dropdownItem = [
    {
      icon: <AiOutlineSetting />,
      display: "Setting",
      click: () => {
        console.log("123");
      },
    },
    {
      icon: <AiOutlineUser />,
      display: "Profie",
      click: () => {
        console.log("123");
      },
    },
    {
      icon: <AiOutlineMail />,
      display: "My Messages",
      click: () => {
        console.log("123");
      },
    },
    {
      icon: <AiOutlineLogout />,
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
