

import ButtonGradient from "../assets/svg/ButtonGradient";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Collaboration from "./Collaboration";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Roadmap from "./Roadmap";
import Services from "./Services";
import Table from "./Table";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Table />
        <Benefits />
        <Collaboration />
        <Services />
        <Banner />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
