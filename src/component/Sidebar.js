import React from "react";

const Sidebar = (props) => {
  return (
    <div className={`dashboard-sidebar ${props.show ? "active" : ""}`}>
      <div className="dashboard-sidebar__header">Post App</div>
      <div className="dashboard-sidebar__navbar">
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
