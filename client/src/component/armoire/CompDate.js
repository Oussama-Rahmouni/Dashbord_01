import React from "react";
import "../CSS/CompDate.css";
const CompDate = () => {
  return (
    <div className="datePart">
      <div className="date">
        <h3>DATE</h3>
        <span>15.1.2024</span>
      </div>
      <div className="heure">
        <h3>HEURE</h3>
        <span>09:16:11</span>
      </div>
    </div>
  );
};

export default CompDate;
