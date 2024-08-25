import React from "react";
import "./Products.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products">
      <div className="product">
        <img src={program_1} alt="" />
        <div className="caption" onClick={() => navigate("/product/program1")}>
          <img src={program_icon_1} alt="" />
          <p>Nutrivolent</p>
        </div>
      </div>
      <div className="product">
        <img src={program_2} alt="" />
        <div className="caption" onClick={() => navigate("/product/program2")}>
          <img src={program_icon_2} alt="" />
          <p>Nutrivolent</p>
        </div>
      </div>
      <div className="product">
        <img src={program_3} alt="" />
        <div className="caption" onClick={() => navigate("/product/program3")}>
          <img src={program_icon_3} alt="" />
          <p>Nutrivolent</p>
        </div>
      </div>
    </div>

    //testing here
    // {/* <div className='products'>
    // <Link to="/product/1" className="product-link">
    //     <div className="product">
    //         <img src={program_1} alt="Product 1" />
    //         <div className="caption">
    //             <img src={program_icon_1} alt="Icon 1" />
    //             <p>Nutrivolent</p>
    //         </div>
    //     </div>
    // </Link>
    // <Link to="/product/2" className="product-link">
    //     <div className="product">
    //         <img src={program_2} alt="Product 2" />
    //         <div className="caption">
    //             <img src={program_icon_2} alt="Icon 2" />
    //             <p>Nutrivolent</p>
    //         </div>
    //     </div>
    // </Link>
    // <Link to="/product/3" className="product-link">
    //     <div className="product">
    //         <img src={program_3} alt="Product 3" />
    //         <div className="caption">
    //             <img src={program_icon_3} alt="Icon 3" />
    //             <p>Nutrivolent</p>
    //         </div>
    //     </div>
    // </Link>
    // </div> */}
  );
};

export default Products;
