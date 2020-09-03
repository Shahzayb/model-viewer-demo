import React from "react";
import dynamic from "next/dynamic";

const DynamicModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <DynamicModelViewer
        src="/models/765.glb"
        iosSrc="/models/765.usdz"
        alt="Model 2"
      />
    </main>
  );
}
