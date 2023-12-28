import React from 'react'
import img1 from './Images/breakfast1-removebg-preview.png'
import img2 from './Images/break2-removebg-preview (1).png'
import img3 from './Images/idli2-removebg-preview.png';
import img4 from './Images/uttapam-removebg-preview.png';
import img5 from './Images/poha-removebg-preview.png';
import img6 from './Images/image3-4-removebg-preview.png';


import Layout from './Layout';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function Breakfast() {
  return (
    <>
    <Navbar />
      <Layout />
      <div className='breakfast-main'>
        <div className='container'>
          <div className='headings-breakfast'>
            <h3>BREAKFAST----------------</h3>
            <h2>CHOOSE YOUR BEST INDIAN BREAKFAST</h2>
          </div>
          <div className='All-breakfast row d-flex justify-content-space-arround'>
            <div className='Image col'>'
              <img alt='' src={img1} style={{ width: "60%" }} />
              <div className='heading'>
                <h3>Allo Paratha</h3>
                <h5 style={{ color: "gray" }}>These crisp yet tender Indian flatbreads are stuffed
                  with a spiced mixture of mashed potatoes, then ...

                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.60/-
                </h5>
              </div>

            </div>
            <div className='Image col'>'
              <img alt='' src={img2} style={{ width: "60%" }} />
              <div className='heading'>
                <h3>Vegetable and Chapti</h3>
                <h5 style={{ color: "gray" }}>One Vegetable Paratha gives 153 calories.
                  which carbohydrates comprise 102 calories, proteins account for 16
                  calories

                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.120/-
                </h5>
              </div>
            </div>
            <div className='Image col' style={{ paddingTop: "25px" }}>
              <img alt='' src={img3} style={{ width: "50%" }} />
              <div className='heading'>
                <h3>Idli</h3>
                <h5 style={{ color: "gray" }}>
                  Idli is Most Famouse dish in south Indian
                  Gently mix the batter, very lightly to make it uniform.
                  Sometimes after steaming,


                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.60/-
                </h5>
              </div>
            </div>
          </div>
          <div className='All-breakfast row d-flex justify-content-space-arround'>
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
            <div className='Image col' style={{ paddingTop: "10px" }}>'
              <img alt='' src={img5} style={{ width: "38%", marginTop: "25px" }} />
              <div className='heading'>
                <h3>Poha</h3>
                <h5 style={{ color: "gray" }}>Poha, also known as pauwa, sira, chira, chivda, avil or avalakki,
                  among many other names,
                  is flattened rice originating.

                </h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.45/-
                </h5>
              </div>
            </div>
            <div className='Image col'>'
              <img alt='' src={img6} style={{ width: "70%", height: "30vh" }} />
              <div className='heading'>
                <h3>Dosa</h3>
                <h5 style={{ color: "gray" }}>A dosa is a thin savory crepe in
                  South Indian cuisine made from a
                  fermented batter of ground black lentils and rice.</h5>
                <h5 style={{ paddingLeft: "45px", color: "red" }}>
                  Rs.145/-
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

export default Breakfast