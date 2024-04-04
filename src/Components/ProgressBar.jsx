import React from 'react';

const ProgressBar = ({ color, percent }) => {
  return (
    <div style={{ width: "80%", height: "40%", borderRadius: "50px", border: "2px solid black", overflow: "hidden" }}>
      <div style={{ height: "100%", width: `${percent}%`, backgroundColor: color, borderRadius: "50px" }}></div>
    </div>
  );
};

export default ProgressBar;