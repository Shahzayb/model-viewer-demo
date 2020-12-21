import Head from "next/head";
import dynamic from "next/dynamic";
// import ModelsGrid from "../components/ModelsGrid";

const DynamicARButton = dynamic(() => import("../components/ARButton"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Model Viwer Demo</title>
      </Head>

      <main>
        {/* <div style={{ maxWidth: 900, margin: "1rem auto", padding: "1rem" }}>
          <ModelsGrid />
        </div> */}
        <div style={{ padding: "2rem" }}>
          <DynamicARButton />
          <ar-button
            src="https://model-viewer-demo.vercel.app/models/666.glb"
            ios-src="https://model-viewer-demo.vercel.app/models/666.usdz"
            link="https://model-viewer-demo.vercel.app/"
            title="Model 1"
            show-if-unsupported
            fallback-url="model-1"
          >
            See in Augmented Reality
          </ar-button>
        </div>
      </main>
    </div>
  );
}
