import Header from "../compontents/Header/Header"
import Link from "next/link";
import Footer from "../compontents/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <h2 className="title-is-2">Learn more about us!</h2>
        <p className="description">Get started by pressing the button below</p>
        <Link href={"/About"}>
          <button className="button-large">BEGIN</button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
