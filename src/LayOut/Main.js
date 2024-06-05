import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";

const Main = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <NavBar isScrolled={isScrolled} />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
