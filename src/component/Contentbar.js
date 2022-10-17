import React from "react";

const ContentBar = (props) => {
  return (
    <>
      <div className="dashboard-navbar__body__page-title">{props.title}</div>
      <div className="dashboard-navbar__body__content">
        <div className="container-fluid">{props.children}</div>
      </div>
    </>
  );
};

export default ContentBar;
