import React from "react";
import dynamic from "next/dynamic";

const DynamicModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <DynamicModelViewer
        src="/models/824.glb"
        iosSrc="/models/824.usdz"
        alt="Model 4"
      />
    </main>
  );
}
