import React from "react";
import "./CanvaLoader.css";

const CanvasLoader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default CanvasLoader;
