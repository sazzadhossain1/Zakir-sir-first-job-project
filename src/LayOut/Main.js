import React from "react";
import NavBar from "../component/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import NavigationBar from "../component/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      {/* <NavigationBar></NavigationBar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
