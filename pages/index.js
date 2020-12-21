import Head from "next/head";
import dynamic from "next/dynamic";
import ModelsGrid from "../components/ModelsGrid";

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
        <div style={{ maxWidth: 900, margin: "1rem auto", padding: "1rem" }}>
          <ModelsGrid />
        </div>
        <div style={{ padding: "2rem" }}>
          <DynamicARButton />
        </div>
      </main>
    </div>
  );
}
