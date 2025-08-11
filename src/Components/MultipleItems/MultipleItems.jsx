import React from "react";
import Slider from "react-slick";
import "./MultipleItems.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <div className="categorized-four container">
        <Slider {...settings}>
          <div className="card">
            <div className="card-i-h-p">
              <img src={"/easy.svg"} alt="" />
              <h2>Easy</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                ducimus ipsam? Eligendi dolorum officia incidunt aperiam sint
                veniam dignissimos dolores?
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-i-h-p">
              {" "}
              <img src={"/powerful.svg"} alt="" />
              <h2>Powerful</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                ducimus ipsam? Eligendi dolorum officia incidunt aperiam sint
                veniam dignissimos dolores?
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-i-h-p">
              {" "}
              <img src={"/private.svg"} alt="" />
              <h2>Private</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                ducimus ipsam? Eligendi dolorum officia incidunt aperiam sint
                veniam dignissimos dolores?
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-i-h-p">
              {" "}
              <img src={"/reliable.svg"} alt="" />
              <h2>Reliable</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
                ducimus ipsam? Eligendi dolorum officia incidunt aperiam sint
                veniam dignissimos dolores?
              </p>
            </div>
          </div>
        </Slider>
      </div>

      {/* // /////////////////////////////////////////////////////////////////////////// */}

      <div className="flex-slashd-ai container">
        <div className="h-slashd-ai">
          <h1>
            Enhance Operational Efficiency with{" "}
            <span className="span-slashd-ai">Slashd.AI</span>
          </h1>
        </div>

        <div className="p-slashd-ai">
          <p className="para-slashd-ai">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sit
            vel porro nulla nemo maxime, similique aut aliquid voluptatibus,
            laudantium soluta, esse quisquam!
          </p>
        </div>
      </div>

      {/* categorized-three */}
      <div className="categorized-three container">


        <div className="card-below-slashd-ai">
          <div className="h-h-p">
            <h2>01.</h2>
            <h3>Medical</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              atque. Perspiciatis tempora totam quasi magni veniam.
            </p>
            
          <div className="small-square"></div>
        </div>
          </div>


        <div className="card-below-slashd-ai">
          <div className="h-h-p">
            <h2>02.</h2>

            <div className="vertical">
            <h3>Real-state</h3>
            </div>

          </div>
        </div>

        <div className="card-below-slashd-ai">
          <div className="h-h-p">
            <h2>03.</h2>
            <div className="vertical">
            <h3>Beauty</h3>
            </div>

          </div>
        </div>

        <div className="card-below-slashd-ai">
          <div className="h-h-p">
            <h2>04.</h2>
            <div className="vertical">
            <h3>Your Business</h3>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
