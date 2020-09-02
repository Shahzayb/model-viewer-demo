import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicModel = dynamic(() => import("../components/Model"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Model Viwer Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DynamicModel />
      </main>
    </div>
  );
}
