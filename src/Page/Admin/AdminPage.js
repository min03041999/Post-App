import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth";

import LoginPage from "../../component/LoginPage";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const showSidebar = () => {
    setShow((prevCheck) => !prevCheck);
  };

  // useEffect(() => {
  //   const handleTabClose = (event) => {
  //     event.preventDefault();
  //     return dispatch(logout());
  //   };

  //   window.addEventListener("beforeunload", handleTabClose);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleTabClose);
  //   };
  // }, []);

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
