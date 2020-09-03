import React from "react";
import "@google/model-viewer"

export default function Model() {
  return (
    <div>
      <model-viewer
        style={{ width: '100vw', height: '100vh', padding: '1rem' }}
        src="/model.gltf"
        ios-src="/model.usdz"
        alt="Demo Model"
        ar
        auto-rotate
        camera-controls
        background-color="#70BCD1"
        quick-look-browsers="safari chrome"
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
