import React, { useState } from "react";
import Investments from "./Investment";
import Stocks from "./stocks";
import "./style.css";

export default function LessonsPage() {
  const [activeTab, setActiveTab] = useState('lessons');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="main">
      <div className="toggle-bar">
        <div className={`toggle-item ${activeTab === 'lessons' ? 'active' : ''}`} onClick={() => handleTabChange('lessons')}>
          Lessons
        </div>
        <div className={`toggle-item ${activeTab === 'investments' ? 'active' : ''}`} onClick={() => handleTabChange('investments')}>
          Investments
        </div>
      </div>
      {activeTab === 'lessons' && (
        <div>
          <h1>Investment Lessons</h1>
          <br />
          <Investments />
        </div>
      )}
      {activeTab === 'investments' && (
        <div>
          {/* Render Investments component here */}
          <h1>Investments</h1>
          <Stocks />
        </div>
      )}
    </div>
  );
}
