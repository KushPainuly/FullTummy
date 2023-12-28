import React from 'react'
import img1 from './Images/daal_1-removebg-preview.png'
import img2 from './Images/luch2-removebg-preview.png'
import img3 from './Images/luch3-removebg-preview.png';
import img4 from './Images/lunch4-removebg-preview.png';
import img5 from './Images/breakfast4-removebg-preview.png'
import img6 from './Images/images-removebg-preview.png'
import Layout from './Layout';
import '../Menu/Menu.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function Lunch() {
  return (
    <>
      <Navbar />
      <Layout />
      <div className='Lunch-main'>
        <div className='container'>
          <div className='headings-lunch'>
            <h3>LUNCH----------------</h3>
            <h2>"CHOOSE YOUR BEST PERFECT LUNCH"</h2>
          </div>
          <div className='All-luch row d-flex justify-content-space-arround'>
            <div className='Image col'>'
              <img alt='' src={img1} style={{ width: "60%", height: "20vh" }} />
              <div className='heading'>
                <h3>Daal Makhani</h3>
                <h5 style={{ color: "gray" }}>
                  Dal makhani is a dish originating in Punjab region.
                  A relatively modern variation of traditional lentil dishes


                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.200/-
                </h5>
              </div>

            </div>
            <div className='Image col'>'
              <img alt='' src={img2} style={{ width: "35%", height: "20vh" }} />
              <div className='heading'>
                <h3>Rice</h3>
                <h5 style={{ color: "gray" }}>Manchurian is a class of Indian
                  Chinese dish made by
                  roughly chopping and deep-frying ingredients
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.80/-
                </h5>
              </div>
            </div>
            <div className='Image col'>
              <img alt='' src={img3} style={{ width: "35%", height: "20vh" }} />
              <div className='heading'>
                <h3>Cuury Sambar</h3>
                <h5 style={{ color: "gray" }}>Sambar is a lentil-based vegetable stew,
                  cooked with pigeon pea and tamarind broth.
                  It is popular in South Indian, Sri Lankan.
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.130/-
                </h5>
              </div>
            </div>
          </div>
          <div className='All-lunch row d-flex justify-content-space-arround'>
            <div className='Image col'>'
              <img alt='' src={img4} style={{ width: "35%", height: "20vh" }} />
              <div className='heading'>
                <h3>Kadai Paneer</h3>
                <h5 style={{ color: "gray" }}>
                  Spicy and flavorful Kadai Paneer is one of the most popular paneer recipes. Paneer and bell peppers are cooked with freshly ground masala!
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.240/-
                </h5>
              </div>

            </div>
            <div className='Image col' style={{ marginBottom: "10px" }}>
              <img alt='' src={img5} style={{ width: "35%", height: "20vh" }} />
              <div className='heading'>
                <h3>Thali</h3>
                <h5 style={{ color: "gray" }}>
                  Indian lunch menu idea with north Indian dishes.
                  This is just an idea as part of my lunch menu series. Check individual links for respective recipes.

                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.140/-
                </h5>
              </div>
            </div>
            <div className='Image col' style={{ paddingTop: "25px" }}>
              <img alt='' src={img6} style={{ width: "50%", }} />
              <div className='heading'>
                <h3>Bread pizza</h3>
                <h5 style={{ color: "gray" }}> made much the same way as a regular pizza with sauce, cheese and other toppings of choice
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.85/-
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

export default Lunch