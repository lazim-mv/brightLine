import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Strategies from "./components/Strategies";
import Facilities from "./components/Facilities";
import StudentSpace from "./components/StudentSpace";
import Banner from "./components/Banner";
import { container5Data, container7Data } from "./Contents";
import Blogs from "./components/Blogs";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";

export default function Home() {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <Header />
      <MobileHeader />
      <main className="mainContainer">
        <Hero />
        <Benefits />
        <About />
        <Strategies />
        <Facilities content={container5Data} />
        <Banner />
        <StudentSpace />
        <Facilities
          content={container7Data}
          extraContent={true}
          className="container7"
          classNametopContainer="topContainer7"
          classNameMainContainer="mainContainer7"
        />
        <Blogs />
        <ContactBanner />
        <Footer />
      </main>
    </>
  );
}

{
  /* <ButtonComponent borderColor="black"   color="#" width="176px" buttonText="Contact Now"   />
      <ButtonComponent borderColor="#5A1E90"   color="#5A1E90" width="176px" buttonText="Contact Now"   /> */
}
