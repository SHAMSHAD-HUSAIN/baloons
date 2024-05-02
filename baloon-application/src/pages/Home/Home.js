import React from "react";
import HomeBanner from "../../components/Banner/banner";
import Offer from "../../components/Offer/offer";
import Advantage from "../../components/Advantages/advantage";
import Feature from "../../components/Features/feature";
import Contact from "../../components/ContactUs/contact";
import Socialmedia from "../../components/socialmediabar/socialmedia";
import Footer from "../../components/Footer/footer";

function Home() {




  return (
    <>
      <HomeBanner />
      <Offer />
      <Advantage />
      <Feature />
      <Contact />
      <Socialmedia />
      <Footer />
    </>
  );
}

export default Home;
