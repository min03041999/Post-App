import React from "react";
import { useSelector } from "react-redux";
import LoginPage from "../../component/LoginPage";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";

import { useState } from "react";

const AdminPage = () => {
  const { auth } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const showSidebar = () => {
    setShow((prevCheck) => !prevCheck);
  };
  return (
    <>
      {auth === null ? (
        <LoginPage />
      ) : (
        <section className="dashboard">
          <Sidebar show={show} />
          <Navbar showSidebar={showSidebar} show={show} />
        </section>
      )}
    </>
  );
};

export default AdminPage;
