import React from "react";
import Investment from "./Investment"; // Assuming LessonsList is in the same directory
import "./style.css";

export default function Invest() {
  return (
    <div className="main">
      <h1>Investment Lessons</h1>
	  <br />
      <Investment />
    </div>
  );
}
