import React from 'react'
import './Ai.css'

export default function Ai() {
  return (
    <>
        <section className="section-ai">
        <div className="ai">
          <p className="ai-text">
            Pick an AI to call
          </p>
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* leveraging */}
      <div className="main-large container">

        <div className="orange">
          <div className="left-side-orange">
            <h2 className='left-h-orange'>Leveraging <span className="bold">Missed Calls</span> for Upselling and cross-Selling</h2>
            <p className="left-p-orange">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, saepe.</p>
            <div className="left-buttons-orange">
              <button className="lc">Limited capacity</button>
              <button className="avail">24/7 availability</button>
            </div>

          </div>
          <div className="right-side-orange">
            <h3 className="right-h-orange">Make Your Customer Happy</h3>
            <p className="right-p-orange">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptas doloremque expedita sed pariatur eaque enim fugit quo facilis porro reprehenderit molestias, fuga accusamus natus!</p>
          </div>
          
        </div>





        <div className="black">

          <div className="left-side-black">

            <div className="left-h-p-b">
               <h1 className="left-h-black">50%</h1>
            <p className="left-p-black">handle Call</p>
            <button className="left-button-black">Get Started</button>
            </div>

            </div>
          <div className="right-side-black">

            <div className="right-p-black"> <p className="right-p-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione vero molestiae nobis pariatur. Officia, impedit reiciendis. Molestiae sequi inventore suscipit quam ab dolor minus provident.</p>
        </div>

             </div>
          
        </div>
      </div>
</>
  )
}
