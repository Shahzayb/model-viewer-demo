import React from "react";
import dynamic from "next/dynamic";

const DynamicModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <DynamicModelViewer
        src="/models/766.glb"
        iosSrc="/models/766.usdz"
        alt="Model 3"
      />
    </main>
  );
}
