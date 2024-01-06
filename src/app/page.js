import Head from "next/head";
import Image from "next/image";
import { ButtonComponent } from "./components/ButtonComponent";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Strategies from "./components/Strategies";
import Facilities from "./components/Facilities";
import { container5Data } from "./Contents";

export default function Home() {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <Header />
      <main className="mainContainer">
        <Hero />
        <Benefits />
        <About />
        <Strategies />
        <Facilities images={container5Data.images}/>
      </main>
    </>
  );
}

{
  /* <ButtonComponent borderColor="black"   color="#" width="176px" buttonText="Contact Now"   />
      <ButtonComponent borderColor="#5A1E90"   color="#5A1E90" width="176px" buttonText="Contact Now"   /> */
}
