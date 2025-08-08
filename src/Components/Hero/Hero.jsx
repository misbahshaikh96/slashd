import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <>
    <section className="hero-section">
        <div className="hero">

          <div className="hero-heading-para">
            <h1 className="bold">
              Revolutionize <span>Customer <br /> Support With AI</span> 
            </h1>
            <p className="para-gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum similique est <br />, repudiandae esse corporis consequatur dignissimos ducimus in! Voluptatum, repudiandae.</p>
          </div>

          <div className="hero-video">
            <video src={'/header-video.mp4'} autoPlay muted loop playsInline></video>
          </div>
        </div>

        <div className="hero-btn">
          <button className="hero-gs">Get Started</button>
          <button className="hero-si">Sign In</button>

        </div>
      </section>


    // 

      <section className="categorized-section">
        <div className="cs-h-p">
          <h2>We'll create it in Minutes</h2>
          <p>Try it Now <a href="">Select Demo</a></p>
     
          </div>
     


        <div className="three-cards container">
          

          <div className="card-three">
            <h1>Salon Receptionish</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad aut, consequatur itaque natus deserunt. Et repellat pariatur dicta maiores!</p>
            <div className="name">
              <div className="orange"></div>
              <p>Name: <span>Skye</span></p>
            </div>

          </div>


          <div className="card-three">
            <h1>Salon Receptionish</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad aut, consequatur itaque natus deserunt. Et repellat pariatur dicta maiores!</p>
             <div className="name">
              <div className="orange"></div>
              <p>Name: <span>Skye</span></p>
            </div>

          </div>


          <div className="card-three">
            <h1>Salon Receptionish</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad aut, consequatur itaque natus deserunt. Et repellat pariatur dicta maiores!</p>
            <div className="name">
            <div className="orange"></div>
            <p>Name: <span>Skye</span></p>
            </div>

          </div>


        </div>

      </section>
      </>
  )
}
