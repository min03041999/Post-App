import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillSignpost2Fill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Sidebar = (props) => {
  const headerNav = [
    {
      icon: <BsFillSignpost2Fill />,
      display: "Post",
      path: "/admin",
    },
    {
      icon: <FaUsers />,
      display: "Users",
      path: "/admin/users",
    },
    {
      icon: <BiMap />,
      display: "Map",
      path: "#",
    },
    {
      icon: <IoIosNotificationsOutline />,
      display: "Notification",
      path: "#",
    },
  ];
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => e.path === pathname);
  return (
    <div className={`dashboard-sidebar ${props.show ? "active" : ""}`}>
      <div className="dashboard-sidebar__header">Animal Post</div>
      <div className="dashboard-sidebar__navbar">
        <ul>
          <h6 className="sidebar__title">SYSTEM</h6>
          {headerNav.map((e, i) => (
            <li
              key={i}
              className={`sidebar-item ${i === active ? "active" : ""}`}
            >
              <Link to={e.path}>
                {e.icon}
                <span className="dashboard-sidebar__navbar__item">
                  {e.display}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
