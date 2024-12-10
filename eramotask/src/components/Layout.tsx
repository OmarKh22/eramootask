import React from "react";
import Navbar from "./Navbar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;