import React from "react";
import LessonsList from "./LessonsList"; // Assuming LessonsList is in the same directory
import "./style.css";
import Sidebar from "../Sidebar/Sidebar";
export default function Lessons() {
  return (
    <div className="app flex h-screen">
					<Sidebar />
					<div className="flex-1 flex place-content-center py-3 overflow-hidden">
						<div className="content shadow-lg bg-white rounded-2xl p-4">
              <div className="main">
                <h1>Financial Lessons</h1>
              <br />
                <LessonsList />
              </div>
            </div>
          </div>
    </div>
  );
}
