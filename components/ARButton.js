import React from "react";
import "@leoncvlt/ar-button";

function ARButton() {
  return (
    <div>
      <ar-button
        src="https://model-viewer-demo.vercel.app/models/666.glb"
        ios-src="https://model-viewer-demo.vercel.app/models/666.usdz"
        link="https://model-viewer-demo.vercel.app/"
        title="Model 1"
      >
        See in Augmented Reality
      </ar-button>
    </div>
  );
}

export default ARButton;
