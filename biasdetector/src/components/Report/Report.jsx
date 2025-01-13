import React from "react";
import { useLocation } from "react-router-dom";
import "./ReportStyles.css";

const Report = () => {
  const location = useLocation();
  const heartRate = location.state?.heartRate;

  return (
    <div className="containerReport">
      <div className="section top-section">
        <div className="top-rect large">Bruce Wayne</div>
        <div className="top-rect small">Download to PDF</div>
      </div>

      <div className="section bottom-section">
        <div className="rect left">
          <div className="text above">Heart Rate from Previous Test (BPM)</div>
          <div className="circle lightblue">
            <div className="text Low">Low</div>
            <div className="text value">106</div>
          </div>
          <div className="circle midblue">
            <div className="text Resting">Resting</div>
            <div className="text value">109</div>
          </div>
          <div className="circle blue">
            <div className="text Max">Max</div>
            <div className="text value">115</div>
          </div>
        </div>
        <div className="rect right">
          <div className="text above">Test Outcome</div>
          <div className="rounded-rect">PASS</div>
        </div>
      </div>

      <div className="section bottom-section">
        <div className="rect left">
          <div className="text above">
            Average Heart Rate Across All Tests (BPM)
          </div>
          <div className="circle lightblue">
            <div className="text Low">Low</div>
            <div className="text value">108</div>
          </div>
          <div className="circle midblue">
            <div className="text Resting">Resting</div>
            <div className="text value">111</div>
          </div>
          <div className="circle blue">
            <div className="text Max">Max</div>
            <div className="text value">123</div>
          </div>
        </div>
        <div className="rect right">
          <div className="text above">Oxygen Saturation</div>
          <div className="rounded-recto">98%</div>
        </div>
      </div>
    </div>
  );
};

export default Report;
