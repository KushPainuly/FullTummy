import React from 'react'
import "./Menu.css"
import Layout from './Layout'
import img1 from './Images/menu-item-1.png';
import img2 from './Images/menu-item-3.png';
import img3 from './Images/spring roll.jpeg';
import img4 from './Images/idli2-removebg-preview.png';
import img5 from './Images/image3-4-removebg-preview.png';
import img6 from './Images/breakfast1-removebg-preview.png'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function Menu() {
  return (
    <>
      <Navbar />
      <div className='Menu'>
        <div className='main container'>
          <div className='para headings-breakfast'>
            <h4>MENU----------------------------</h4>
          </div>
          <div className='headings'>
            <h1>CHECK OUR TASTY MENU</h1>
          </div>
        </div>
        <Layout />
        <div className='all container '>
          <div className='All-Menu row d-flex justify-content-space-arround' style={{marginTop: '-25px'}}>
            <div className='Image col'>'
              <img alt='' src={img1} style={{ width: "50%" }} />
              <div className='heading'>
                <h3>Paneer Masala</h3>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.165/-
                </h5>
              </div>

            </div>
            <div className='Image col'>'
              <img alt='' src={img2} style={{ width: "50%" }} />
              <div className='heading'>
                <h3>Noodless</h3>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.140/-
                </h5>
              </div>
            </div>
            <div className='Image col'>'
              <img alt='' src={img3} style={{ width: "50%" }} />
              <div className='heading'>
                <h3>Spring Rolls</h3>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.120/-
                </h5>
              </div>

            </div>
          </div>
          <div className='All-Menu2 row d-flex justify-content-space-arround'>
            <div className='Image col'>'
              <img alt='' src={img4} style={{ width: "70%", height: "30vh" }} />
              <div className='heading'>
                <h3>IDLI</h3>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.55/-
                </h5>
              </div>
            </div>
            <div className='Image col'>'
              <img alt='' src={img5} style={{ width: "70%", height: "30vh" }} />
              <div className='heading'>
                <h3>Dosa</h3>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  RS.130/-
                </h5>
              </div>
            </div>
            <div className='Image col'>'
              <img alt='' src={img6} style={{ width: "60%" }} />
              <div className='heading'>
                <h3>Allo Paratha</h3>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.60/-
                </h5>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Menu