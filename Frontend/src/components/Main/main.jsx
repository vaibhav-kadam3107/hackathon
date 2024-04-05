import React from "react";
import AboutSection from "./content";
import Sidebar from "../Sidebar/Sidebar";
export default function Main() {
  return (
    <div className="app flex h-screen">
					<Sidebar />
					<div className="flex-1 flex place-content-center py-3 overflow-hidden">
						<div className="content shadow-lg bg-white rounded-2xl p-4">
              <div className="main">
                <AboutSection />
              </div>
            </div>
          </div>
    </div>
  );
}
