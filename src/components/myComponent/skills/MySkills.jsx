import React from "react";
import "./MySkills.css";
import { ReactRouterDom } from "./ReactRouterDom";
import { Redux } from "./Redux";
import { Jquery } from "./Jquery";
import { Outlet } from "react-router-dom";
export const MySkills = () => {
  return (
    <div className="bg-primary-color pt-2 pb-2">
      <div className="container">
        <div>
          <div className="w-100 d-flex justify-content-center align-content-center">
            <i className="fa-brands fa-react display-3 react"></i>
          </div>
          <span className="light-color">
            i know
            <span className="text-color"> React </span>, "React" is a JavaScript
            library thats help you to make a SPA (
            <span className="text-color">S</span>ingle
            <span className="text-color"> P</span>age
            <span className="text-color"> A</span>pplication) And becaus its a
            <span className="text-color"> library</span> , you need a lot of
            <span className="text-color"> packages</span> to improve your work ,
            so here some of them i know{" "}
            <span className="text-color">well </span>
            click to them to see info
          </span>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <ReactRouterDom />
          <Redux />
          <Jquery />
        </div>
        <div className="min-width p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
