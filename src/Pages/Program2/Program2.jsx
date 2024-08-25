import React, { useState, useEffect } from "react";
import program_2 from "../../assets/supplements.png";
import logo from "../../assets/Nutrition.png";
import backarrow from "../../assets/back.png";
import { NavLink } from "react-router-dom";
import "./Program2.css";

function Program2() {
  return (
    <div>
      <nav className="container">
        <NavLink to="/">
          <img src={logo} alt="" className="logo"  />
        </NavLink>
      </nav>
      <div className="productContainer">
        <div className="backButton">
          <NavLink to="/">
            <button className="backBtn">
              <img
                src={backarrow}
                alt=""
                style={{ marginRight: "10px", width: "20px" }} // Adjusted the margin and width
              />
              <p
                style={{ fontSize: "20px", fontWeight: 500, color: "#736c6c" }}
              >
                Back
              </p>{" "}
            </button>
          </NavLink>
        </div>
        <img src={program_2} alt="" className="productImage" />
        <div className="productCaption">
          <p style={{ fontSize: "20px", fontWeight: 500 }}>
            VITAMIN E (VAHY tuh min E) prevents and treats low levels of vitamin
            E in your body. Vitamin E is an antioxidant, which helps to protect
            your cells. Vitamin E plays an important role in maintaining the
            health of your blood cells, brain, eyes, and skin. This medicine may
            be used for other purposes; ask your health care provider or
            pharmacist if you have questions.
          </p>
        </div>
      </div>
      <div className="footer">
        <p>© 2024 AJ Supplements®. All Rights Reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Company Statements</li>
        </ul>
      </div>
    </div>
  );
}

export default Program2;
