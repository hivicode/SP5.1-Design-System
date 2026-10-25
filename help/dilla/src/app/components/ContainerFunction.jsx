import React from "react";

export default function ContainerFunction({ title, children }) {
  const containerStyle = {
    backgroundColor: "#cfe7ffff",
    border: "1px solid #4b9cffff",
    borderRadius: "8px",
    padding: "16px 20px",
    margin: "16px 0",
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#0f172a" }}>
        {title || "Container"}
      </h3>
      <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: 1.5 }}>
        {children || "Ini adalah teks di dalam container."}
      </p>
    </div>
  );
}
