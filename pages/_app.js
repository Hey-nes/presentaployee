import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <title>Ownit DEV</title>
        <link rel="icon" href="/ownit.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
