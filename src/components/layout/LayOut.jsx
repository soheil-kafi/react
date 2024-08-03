import React from "react";
import { Header } from "./outer/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./outer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
