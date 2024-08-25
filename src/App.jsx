import React, { useEffect } from "react";
import { useNavigate, RouterProvider } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import Program1 from "./Pages/Program1/Program1";
import Layout from "./Pages/Layout/Layout";
import Program2 from "./Pages/Program2/Program2";
import Program3 from "./Pages/Program3/Program3";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/product/program1" element={<Program1 />} />
        <Route path="/product/program2" element={<Program2 />} />
        <Route path="/product/program3" element={<Program3 />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/NavBar/Navbar';
// import Hero from './Components/Hero/Hero';
// import Products from './Components/Products/Products';
// import Title from './Components/Title/Title';
// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
// import Footer from './Components/Footer/Footer';
// import ProductDisplay from './Components/ProductDisplay/ProductDisplay';

// // Layout component for general pages
// const MainLayout = () => (
//   <>
//     <Navbar />
//     <Hero />
//     <div className="container">
//     <Title subTitle='OUR PRODUCT' title='Nutrivolent'/>
//     <Products/>
//     <About/>
//     <Title subTitle='CONTACT US' title='Get A Quote'/>
//     <Contact/>
//     </div>

//     <Footer />
//   </>
// );

// // Layout component for ProductDisplay page
// const ProductLayout = () => (
//   <>
//     <Navbar />
//     <ProductDisplay />
//     <Footer />
//   </>
// );

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/*" element={<MainLayout />} />
//         <Route path="/product/:id" element={<ProductLayout />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
