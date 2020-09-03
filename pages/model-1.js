import React from "react";
import dynamic from "next/dynamic";

const DynamicModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <DynamicModelViewer
        src="/models/666.glb"
        iosSrc="/models/666.usdz"
        alt="Model 1"
      />
    </main>
  );
}
