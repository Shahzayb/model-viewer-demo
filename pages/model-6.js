import React from "react";
import dynamic from "next/dynamic";

const DynamicModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <DynamicModelViewer
        src="/models/927.glb"
        iosSrc="/models/927.usdz"
        alt="Model 6"
      />
    </main>
  );
}
