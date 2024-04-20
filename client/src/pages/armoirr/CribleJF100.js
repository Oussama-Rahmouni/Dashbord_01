import React from "react";
import CounterModelOne from "../components/CounterModelOne";
import CounterModelTwo from "../components/CounterModelTwo";
import PartieDisjoncteur from "../components/PartieDisjoncteur";
import "../CSS/CribleJF100.css";
const CribleJF100 = ({ title }) => {
 
  return (
    <div className="SectionOne">
      <h1> {title} </h1>
      <div>
        <CounterModelOne />
        <CounterModelTwo />
        <CounterModelOne />
        <PartieDisjoncteur />
      </div>
    </div>
  );
};

export default CribleJF100;
