import React from "react";

function ColorPalette({ colors, onColorSelect }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {colors.map((color, index) => (
        <button
          key={index}
          onClick={() => onColorSelect(color)}
          style={{
            backgroundColor: color,
            border: "none",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        ></button>
      ))}
    </div>
  );
}

export default ColorPalette;
  