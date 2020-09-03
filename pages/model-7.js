import React from "react";
import dynamic from "next/dynamic";

const DynamicModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <DynamicModelViewer
        src="/models/1385.glb"
        iosSrc="/models/1385.usdz"
        alt="Model 7"
      />
    </main>
  );
}
