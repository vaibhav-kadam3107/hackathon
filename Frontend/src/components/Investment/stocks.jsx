import React from 'react';
import './style2.css'

function StocksList() {
  // Dummy stock dat

  return (
    <div className="stocks-container">
      <div className="iframe-container">
        <iframe src="http://127.0.0.1:5500/final/index.html" title="External Content" width="100%" height="500"></iframe>
      </div>
    </div>
  );
}

export default StocksList;
