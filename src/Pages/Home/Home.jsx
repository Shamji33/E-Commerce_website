import React, { useContext } from "react"
import Layout from "../../Components/Layout/Layout";
import myContext from "../../Context/Data/myContext"; 
import HeroSection from "../../Components/HeroSection/HeroSection";
import Filter from "../../Components/filter/Filter";
import ProductCard from "../../Components/productCard/ProductCard";
import Track from "../../Components/Track/Track";
import Testimonial from "../../Components/Testimonial/Testimonial";

function Home() {

  const context = useContext(myContext);

  // const {name , rollno} = context;
  const {state ,color} = context;


    return (
      <>
        <Layout>
          <HeroSection/>
          <Filter/>
          <ProductCard/>
          <Track/>
          <Testimonial/>
        </Layout>
      </>
    )
  }
  
  export default Home;
  