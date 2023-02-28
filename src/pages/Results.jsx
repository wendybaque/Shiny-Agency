import React from "react";
import { useContext } from "react";
import { SurveyContext } from "../utils/context";

const Results = () => {
  const { answers } = useContext(SurveyContext)
  console.log(answers)
  return <div>Results</div>;
};

export default Results;
