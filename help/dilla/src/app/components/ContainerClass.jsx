"use client";

import React, { Component } from "react";

export default class ContainerClass extends Component {
  render() {
    const { title, children } = this.props;

    const containerStyle = {
      backgroundColor: "#fef3c7",
      border: "1px solid #fde68a",
      borderRadius: "8px",
      padding: "16px 20px",
      margin: "16px 0",
    };

    return (
      <div style={containerStyle}>
        <h3 style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#92400e" }}>
          {title || "Container"}
        </h3>
        <p style={{ margin: 0, fontSize: "14px", color: "#78350f", lineHeight: 1.5 }}>
          {children || "Ini adalah teks di dalam container."}
        </p>
      </div>
    );
  }
}
