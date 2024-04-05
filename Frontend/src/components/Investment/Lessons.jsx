import React, { useState } from "react";
import Investments from "./Investment";
import Stocks from "./stocks";
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
export default function LessonsPage() {
  const [activeTab, setActiveTab] = useState('lessons');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app flex h-screen">
					<Sidebar />
					<div className="flex-1 flex place-content-center py-3 overflow-hidden">
						<div className="content shadow-lg bg-white rounded-2xl p-4">
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
                    {/* <h1>Investment Lessons</h1> */}
                    <Investments />
                  </div>
                )}
                {activeTab === 'investments' && (
                  <div>
                    {/* Render Investments component here */}
                    <h2>Virtual Stock Market</h2>
                    <Stocks />
                  </div>
                )}
              </div>
            </div>
            </div>
            </div>
  );
}
