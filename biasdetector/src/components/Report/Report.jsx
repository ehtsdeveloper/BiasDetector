import React from "react";
import './ReportStyles.css';

const Report = () => {
    return (
        <div className="container">
          {/* Thin rectangle at the very top */}
          <div className="top-bar"></div>
    
          {/* Top Section with two centered rectangles */}
          <div className="section top-section">
            <div className="top-rect large"></div>
            <div className="top-rect small"></div>
          </div>
    
          {/* Bottom Sections */}
          <div className="section bottom-section">
            <div className="rect left">
              {/* Circles inside the left rectangle with different colors */}
              <div className="circle red"></div>
              <div className="circle green"></div>
              <div className="circle blue"></div>
            </div>
            <div className="rect right">
              {/* Rounded rectangle inside the right rectangle */}
              <div className="rounded-rect"></div>
            </div>
          </div>
          <div className="section bottom-section">
            <div className="rect left">
              {/* Circles inside the left rectangle with different colors */}
              <div className="circle yellow"></div>
              <div className="circle purple"></div>
              <div className="circle pink"></div>
            </div>
            <div className="rect right">
              {/* Rounded rectangle inside the right rectangle */}
              <div className="rounded-rect"></div>
            </div>
          </div>
        </div>
      );
}

export default Report;