import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Products from "../../Components/Products/Products";
import Title from "../../Components/Title/Title";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
function Layout() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PRODUCT" title="Nutrivolent" />
        <Products />

        <About />
        <Title subTitle="CONTACT US" title="Get A Quote" />
        <Contact />
      </div>

      <div className="container">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
