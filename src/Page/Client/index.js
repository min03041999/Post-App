import React from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import RoutesClient from "../../Config/Client/RoutesUsers";

const Client = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "20px" }}>
        <RoutesClient />
      </div>
      <Footer />
    </>
  );
};

export default Client;
