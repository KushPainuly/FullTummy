import React from 'react'
import './Menu.css'
import img1 from './Images/spring roll.jpeg'
import img2 from './Images/starters2.jpeg'
import img3 from './Images/french fries.jpg';
import img4 from './Images/starters4-removebg-preview.png';
import img5 from './Images/parmesan-crusted-potatoes-1-removebg-preview.png'
import img6 from './Images/images-removebg-preview.png'
import Layout from './Layout';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Starters() {
  return (
    <>    
    <Navbar/>
    <Layout />
      <div className='starters-main'>
        <div className='container'>
          <div className='headings-starters'>
            <h3>Starters----------------</h3>
            <h2>"CHOOSE YOUR BEST STARTERS"</h2>
          </div>
          <div className='All-starters row d-flex justify-content-space-arround'>
            <div className='Image col'>'
              <img alt='' src={img1} style={{ width: "50%" }} />
              <div className='heading'>
                <h3>Spring Rolls</h3>
                <h5 style={{ color: "gray" }}>The kind of wrapper, fillings, and
                  cooking technique used,
                  as well as the name, vary considerably

                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.120
                </h5>
              </div>

            </div>
            <div className='Image col'>'
              <img alt='' src={img2} style={{ width: "50%" }} />
              <div className='heading'>
                <h3>Manchurion</h3>
                <h5 style={{ color: "gray" }}>Manchurian is a class of Indian
                  Chinese dish made by
                  roughly chopping and deep-frying ingredients
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.150
                </h5>
              </div>
            </div>
            <div className='Image col' style={{ paddingTop: "25px" }}>
              <img alt='' src={img3} style={{ width: "65%", }} />
              <div className='heading'>
                <h3>French Fries</h3>
                <h5 style={{ color: "gray" }}>French fries, chips,
                  finger chips,
                  french-fried potatoes, or simply fries, are batonnet or
                  allumette
                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs. 80
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
                  Rs.250/-
                </h5>
              </div>

            </div>
            <div className='Image col'  style={{marginBottom:"10px"}}>
              <img alt='' src={img5} style={{ width: "38%", height:"25vh" }} />
              <div className='heading'>
                <h3>Parmesan Crusted</h3>
                <h5 style={{ color: "gray" }}>Bake potatoes for 35 - 40
                 minutes or until they are soft and the parmesan crust is 
                deep golden
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
                  Rs. 90
                </h5>
              </div>
            </div>
          </div>
         
          
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Starters;