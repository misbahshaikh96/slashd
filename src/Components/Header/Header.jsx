import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

export default function Header() {
  return (
    <header>
        <div className="wrapper">
            <Navbar/>
            <div className="cta">
                <h1 className="main-heading">
                    <span className='bold'>Revolutionized </span>
                    <span className="small">Customer <br />Support With AI</span>
                </h1>


                {/* <h1>Revolutionize Customer <br />Support with AI</h1> */}
                <p className="cta-subtitle">Lorem ipsum dolor s quod, ipsam consequatur non sit est similique fugit molestiae voluptatibus?</p>

                <div className="cta-buttons">
                    <a href="" className="btn-primary">Get Started</a>
                    <a href="" className="btn-secondary">Get Started</a>
                </div>

                {/* features */}
                <div className="features">
                    <h1>We'll Create It In Minutes</h1>
                    <p className="demo-subtitle">Try It Now <span className='hightlight'>Select Demo</span></p>
                </div>

                <div className="categorized">
                    <div className="card">
                        <h1>Salon Receptionist</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam exercitationem sunt hic eveniet iste nostrum esse aperiam eligendi magnam?</p>
                    </div>
                    <div className="card">
                        <h1>Transportation Specialist</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam exercitationem sunt hic eveniet iste nostrum esse aperiam eligendi magnam?</p>
                    </div>
                    <div className="card">
                        <h1>Assistance 2.0</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam exercitationem sunt hic eveniet iste nostrum esse aperiam eligendi magnam?</p>
                    </div>
                </div>
            </div>

           
        </div>
    </header>
  )
}
