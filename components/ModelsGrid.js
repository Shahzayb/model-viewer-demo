import React from "react";
import ModelViewerLink from "./ModelViewerLink";

export default function ModelsGrid() {
  return (
    <section
      style={{
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gridAutoRows: "minmax(150px, auto)",
      }}
    >
      <ModelViewerLink href="/model-1" src="/models/666.jpg" alt="Model 1" />
      <ModelViewerLink href="/model-2" src="/models/765.jpg" alt="Model 2" />
      <ModelViewerLink href="/model-3" src="/models/766.jpg" alt="Model 3" />
      <ModelViewerLink href="/model-4" src="/models/823.jpg" alt="Model 4" />
      <ModelViewerLink href="/model-5" src="/models/1489.png" alt="Model 5" />
      <ModelViewerLink href="/model-6" src="/models/927.jpg" alt="Model 6" />
      <ModelViewerLink href="/model-7" src="/models/1385.jpg" alt="Model 7" />
      <ModelViewerLink href="/model-8" src="/models/1494.jpg" alt="Model 8" />
    </section>
  );
}
