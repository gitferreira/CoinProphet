import ButtonGradient from "../assets/svg/ButtonGradient";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import Table from "../components/Table";

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
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
