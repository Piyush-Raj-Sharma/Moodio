import React from "react";

const Loader = () => {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  };

  const spinnerStyle = {
    width: "50px",
    height: "50px",
    border: "6px solid #f3f3f3",
    borderTop: "6px solid #2563eb", 
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={loaderStyle}>
      <style>{keyframes}</style>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default Loader;
