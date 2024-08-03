import React from "react";
import { useSelector } from "react-redux";
export const MyProject = () => {
  const count = useSelector((state) => state.Category.category);
  return <div></div>;
};
