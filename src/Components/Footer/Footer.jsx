import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-black container">
      <div className="footer-h-p">
        <h2>Frequently asked questions</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <details>
        <summary>
          <span className="q">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            officiis?
          </span>
          <img src={"./FAQ.svg"} alt="" />
        </summary>
      </details>
    </div>
  );
}
