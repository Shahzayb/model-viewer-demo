import React from "react";
import "@google/model-viewer"

export default function Model() {
  return (
    <div>
      <model-viewer
        style={{ width: '90vw', height: '80vh', margin: '0 auto' }}
        src="/model.gltf"
        ios-src="/model.usdz"
        alt="Demo Model"
        ar
        auto-rotate
        camera-controls
        background-color="#70BCD1"
        quick-look-browsers="safari chrome"
        interaction-prompt="auto"
      ></model-viewer>
    </div>
  );
}
