import React from 'react'
import img1 from './Images/dinner1-removebg-preview.png'
import img2 from './Images/dinner22-removebg-preview.png'
import img3 from './Images/butter-chicken-murgh-makhani-removebg-preview.png';
import img4 from './Images/starters4-removebg-preview.png';
import img5 from './Images/parmesan-crusted-potatoes-1-removebg-preview.png'
import img6 from './Images/images-removebg-preview.png'
import Layout from './Layout';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function Dinner() {
  return (
    <div>
      <Navbar />
      <Layout />
        <div className='dinner-main'>
        <div className='container'>
          <div className='headings-dinner'>
            <h3>DINNER----------------</h3>
            <h2>"CHOOSE YOUR PERFECT INDIAN DINNER"</h2>
          </div>
          <div className='All-dinner row d-flex justify-content-space-arround'>
            <div className='Image col'>'
              <img alt='' src={img1} style={{ width: "35%", height:"20vh" }} />
              <div className='heading'>
                <h3>Paneer Tikka</h3>
                <h5 style={{ color: "gray" }}> Paneer tikka masala is a popular dish of grilled paneer
                 in spicy onion tomato gravy. 
                Learn how to make resaturant style paneer tikka masala.
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.120/-
                </h5>
              </div>

            </div>
            <div className='Image col'>'
              <img alt='' src={img2} style={{ width: "35%", height:"20vh" }} />
              <div className='heading'>
                <h3>Aloo Masala</h3>
                <h5 style={{ color: "gray", fontSize:"18px" }}>DUM ALOO MASALA. Dum Aloo Premium Quality Masala 
                comes with all spices mixed ... powder, 
                ginger powder, mustard seeds, fenugreek, turmeric and saffron.
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.150/-
                </h5>
              </div>
            </div>
            <div className='Image col' style={{ paddingTop: "25px" }}>
              <img alt='' src={img3} style={{ width: "40%",height:"15vh" }} />
              <div className='heading'>
                <h3>French Fries</h3>
                <h5 style={{ color: "gray" }}>French fries, chips,
                  finger chips,
                  french-fried potatoes, or simply fries, are batonnet or
                  allumette
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.125/-
                </h5>
              </div>
            </div>
          </div>
          <div className='All-starters row d-flex justify-content-space-arround'>
            <div className='Image col'>'
              <img alt='' src={img4} style={{ width: "50%" }} />
              <div className='heading'>
                <h3>Potato Curry</h3>
                <h5 style={{ color: "gray" }}>potato curry is an easy vegan recipe 
                made with a few choice spices. 
                It tastes fantastic with poori, an Indian bread.
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.110/-
                </h5>
              </div>

            </div>
            <div className='Image col'  style={{marginBottom:"10px"}}>
              <img alt='' src={img5} style={{ width: "38%", height:"25vh" }} />
              <div className='heading'>
                <h3>Parmesan Crusted</h3>
                <h5 style={{ color: "gray" }}>Bake potatoes for 35 - 40
                 minutes or until they are soft and the parmesan crust is 
                deep golden (you can check through the glass!)
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.150/-
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
      <Footer/>
    </div>
  )
}

export default Dinner