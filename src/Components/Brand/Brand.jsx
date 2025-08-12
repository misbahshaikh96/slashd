import React from "react";
import "./Brand.css";

export default function Brand() {
  return (
    <>
      <section className="brand-section">
        <div className="brand-h-h-p">
          <h2>Connects with your</h2>
          <a href="">CALENDAR * EHR</a>
          <p>Slashd.ai connects the software you already use</p>
        </div>

        <div className="container-black container">
          <div className="container-brand">
            {/* <img src={"./Brand-stripe.png"} alt="" /> */}
            <img src={"./Brand-square.png"} alt="" />
            <img src={"./brand-zapier.png"} alt="" />
            <img src={"./brand-paypal.png"} alt="" />
            <img src={"./Brand-google.png"} alt="" />
          </div>
          <div className="btn-brand">
            <a href="">
              Get Started <img className="btn-arrow" src={"./SVG.svg"} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
