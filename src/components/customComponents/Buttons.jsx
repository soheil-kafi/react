import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/buttons.css";
export const Buttons = () => {
  return (
    <div className="d-flex justify-content-around ">
      <div>
        <NavLink to="/">
          <button className="my-button btn text-color bg-secondary-color m-1">
            Home
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="who-am-i">
          <button className="my-button btn text-color bg-secondary-color m-1">
            Me
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="skills">
          <button className="my-button btn text-color bg-secondary-color m-1">
            my skills
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="project">
          <button className="my-button btn text-color bg-secondary-color m-1">
            My Project
          </button>
        </NavLink>
      </div>
    </div>
  );
};
