import React from "react";
import "../../../css/footer.css";
import { SocialMedias } from "./social/SocialMedias";
export const Footer = () => {
  return (
    <div className="bg-primary-color top-border light-color ">
      <div className="container">
        <div className="text-color text-center">contact me witch:</div>
        <div className="text-center my-2">social media</div>
        <SocialMedias />
        <div className="text-center">or my phone number</div>
        <div className="text-color text-center">09104605062</div>
      </div>
    </div>
  );
};
