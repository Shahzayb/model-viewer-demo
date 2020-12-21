import React from "react";
import "@google/model-viewer"

export default function ModelViewer({src, iosSrc, alt}) {
  return (
    <div>
      <model-viewer
        style={{ width: '90vw', height: '80vh', margin: '0 auto' }}
        src={src}
        ios-src={iosSrc}
        alt={alt}
        ar
        auto-rotate
        camera-controls
        quick-look-browsers="safari chrome"
        interaction-prompt="auto"
        exposure="7"
      ></model-viewer>
    </div>
  );
}
