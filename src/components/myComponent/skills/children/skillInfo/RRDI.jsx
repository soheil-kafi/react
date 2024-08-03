import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export const RRDI = () => {
  return (
    <div className="light-color">
      <span className="text-color"> react router dom </span> is a another famous
      react package , its help you to change rendered component without the page
      getting refresh , like : <br />
      <div className="mt-2">
        <NavLink to="/skills/rrd/1">category 1 </NavLink>
      </div>
      <div className="mt-2">
        <NavLink to="/skills/rrd/2">category 2 </NavLink>
      </div>
      <div className="mt-2">
        <NavLink to="/skills/rrd/3">category 3 </NavLink>
      </div>
      <div className="mt-2">
        <NavLink to="/skills/rrd/4">category 4 </NavLink>
      </div>
      <div className="mt-2">
        <NavLink to="/skills/rrd/5">category 5 </NavLink>
      </div>
      <Outlet />
      <div>
        if you look at URL after click on categories you see its changed , but
        the page is not going to refresh or white page
      </div>
    </div>
  );
};
