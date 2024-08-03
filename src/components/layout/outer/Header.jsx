import React from "react";
import { Buttons } from "../../customComponents/Buttons";
import "../../../css/Header.css";
export const Header = () => {
  return (
    <div className="bg-primary-color bottom-border">
      <div className="container">
        <div className=" d-flex justify-content-between align-content-center ">
          <div className="justify-content-center align-content-center">
            <span className="light-color">
              IM <span className="text-color">sohei-kafi</span>
            </span>
          </div>
          <div className="mtb-1">
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
};
