import React from "react";
import Navbar from "../Navbar/Navbar";
import Styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
