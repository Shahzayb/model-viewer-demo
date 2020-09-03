import Head from "next/head";
import ModelsGrid from "../components/ModelsGrid";

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
      </main>
    </div>
  );
}
