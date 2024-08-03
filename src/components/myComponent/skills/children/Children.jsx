import React from "react";
import { useParams } from "react-router-dom";
import { JqueryInfo } from "./skillInfo/JqueryInfo";
import { ReduxInfo } from "./skillInfo/ReduxInfo";
import { RRDI } from "./skillInfo/RRDI";

export const Children = () => {
  const params = useParams();

  if (params.mySkill === "jquery") {
    return <JqueryInfo />;
  } else if (params.mySkill === "redux") {
    return <ReduxInfo />;
  } else if (params.mySkill === "rrd") {
    return <RRDI />;
  }
};
