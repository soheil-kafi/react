import React from "react";
import { useParams } from "react-router-dom";
export const Categories = () => {
  const params = useParams();
  if (params.mySkill === "rrd") {
    return (
      <div className="light-color mt-1 mb-1">
        you click on category number ===>
        <span className="text-color"> {params.id}</span>
      </div>
    );
  } else {
    return <div>you are in wrong place</div>;
  }
};
