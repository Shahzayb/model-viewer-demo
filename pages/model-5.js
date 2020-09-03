import React from "react";
import dynamic from "next/dynamic";

const DynamicModelViewer = dynamic(() => import("../components/ModelViewer"), {
  ssr: false,
});

export default function Index() {
  return (
    <main>
      <DynamicModelViewer
        src="/models/846.glb"
        iosSrc="/models/846.usdz"
        alt="Model 5"
      />
    </main>
  );
}
