import About from "../../components/About/About";
import Brands from "../../components/Brands/Brands";
import LatestProject from "../../components/LatestProject/LatestProjects";
import OurStats from "../../components/OurStats/OurStats";
import Products from "../../components/Products/Products";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <OurStats></OurStats>
      <About></About>
      <Products></Products>
      <Brands></Brands>
      <LatestProject></LatestProject>
    </>
  );
};

export default Home;
