import React from "react";
import "@google/model-viewer";

export default function Model() {
  return (
    <div>
      <model-viewer
        style={{ width: 400, height: 600, margin: "0 auto" }}
        src="/Lion.gltf"
        alt="Demo Model"
        auto-rotate
        camera-controls
        ar
        ios-src="/Lion.usdz"
        // background-color="#70BCD1"
        // shadow-intensity="2"
        // camera-controls=""
        // interaction-prompt="auto"
        // auto-rotate=""
        // ar=""
        // magic-leap=""
      ></model-viewer>
    </div>
  );
}
