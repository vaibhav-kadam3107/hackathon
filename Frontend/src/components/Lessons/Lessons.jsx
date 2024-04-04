import React from "react";
import LessonsList from "./LessonsList"; // Assuming LessonsList is in the same directory
import "./style.css";

export default function Lessons() {
  return (
    <div className="main">
      <h1>Financial Lessons</h1>
	  <br />
      <LessonsList />
    </div>
  );
}
