import React from "react";
import "@leoncvlt/ar-button";
import "@leoncvlt/ar-button/styles.css";

function ARButton() {
  return (
    <div>
      <ar-button
        src="/models/666.glb"
        iosSrc="/models/666.usdz"
        link="https://www.nasa.gov/"
        title="Model 1"
      >
        See in Augmented Reality
      </ar-button>
    </div>
  );
}

export default ARButton;
