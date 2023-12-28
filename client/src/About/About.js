import React from 'react'
import './Style.css';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const About = () => {

    return (
        <>
            <Navbar />
            <div className='container-fluid text-center'>
                <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                    <div>
                        <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="#" >  More About Us  </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>



            <div className="container marketing" style={{ padding: '20px' }} />
            <div className="row">
                <div className="col-lg-4" style={{ padding: "22px" }}>
                    <img className="bd-placeholder-img rounded-circle" width="230ox" height="250px" aria-label="placeholder"
                        preserveAspectRatio="xMidyMid slice" focusable="false"
                        src=' https://magazinebbm.com/assets/img/uploads/en-US/2017/12/brilla.jpg'>
                    </img>
                    <h2 className="fw-normal" style={{ margin: "11px", color: "#ce1212" }}>Owner</h2>
                    <p>Owner's Name brings a lifetime of food expertise and a sprinkle of creativity to every dish, making dining a delightful experience and soul of our delectable creations..</p>

                </div>

                <div className="col-lg-4" style={{ padding: "22px" }}>
                    <img className="bd-placeholder-img rounded-circle" width="230px" height="250px" aria-label="placeholder"
                        preserveAspectRatio="xMidyMid slice" focusable="false"
                        src='https://www.business-management-degree.net/wp-content/uploads/2020/06/shutterstock_34347769.jpg'>
                    </img>
                    <h2 className="fw-normal" style={{ margin: "11px", color: "#ce1212" }}>Executive Chef</h2>
                    <p>With Chef's Name at the helm, our kitchen is a stage where innovation and expertise come together to create culinary masterpieces.</p>

                </div>

                <div className="col-lg-4" style={{ padding: "22px" }}>
                    <img className="bd-placeholder-img rounded-circle" width="230px" height="250px" aria-label="placeholder"
                        preserveAspectRatio="xMidyMid slice" focusable="false"
                        src=' https://gumlet.assettype.com/bloombergquint%2F2022-01%2F37a40536-7ecf-4808-919a-6a18bb6a9e5b%2FiD_team.jpg?rect=0%2C0%2C2048%2C1152&auto=format%2Ccompress&w=576'>
                    </img>
                    <h2 className="fw-normal" style={{ margin: "11px", color: "#ce1212" }}>Our Team</h2>
                    <p>With diverse expertise and a shared love for food, our talented team is committed to delivering delectable recipes and culinary inspiration to your table.</p>

                </div>
            </div>






            <div className="row featurette">
                <div className="col-md-7" style={{ padding: "22px" }}>
                    <h2 className style={{ fontSize: '21px', margin: '25px', color: "gray", fontFamily: "sans-serif ", padding: '4px' }}>Welcome to  our Food Website where
                        our love for food comes to life!
                        We are a group of dedicated food enthusiasts, and our mission is simple
                        to share our passion all things culinary with you. From the sizzle of a perfectly seared steak to the comforting warmth of a homemade apple
                        pie,
                        our hearts and taste buds are deeply connected to the world of food.
                    </h2>

                    <p className="lead" style={{ margin: '25px', color: "gray", fontSize: "21px", fontFamily: "sans-serif" }}>We believe that food is not just about sustenance; it's an
                        art, a culture, and a universal language
                        that brings people together. Whether you're an experienced chef, a home cook, or someone who simply enjoys a good meal,
                        you've found a place where your culinary journey begins.</p>
                </div>
                <div className="col-md-5">
                    <img src='https://5.imimg.com/data5/SELLER/Default/2021/10/IF/RH/BN/52987365/fast-food-cook-service-500x500.png' style={{ width: '500px', height: '500px', margin: '20px' }} alt='' />
                </div>
            </div>


            <div className="row featurette" style={{ color: "gray", fontWeight: "500px" }}>
                <h2 className="featurette-heading fw-normal lh-1" style={{ color: "#ce1212", padding: "18px",marginTop:'20px', textAlign: 'center', textTransform: 'uppercase' }}><b className='mt-2'>Our Story</b></h2>
                <div className="col-md-7 order-md-2">
                    <p className="lead" style={{ marginLeft: '22px',marginTop: '25px' }} >Our journey began with  simple idea to create place where food enthusiasts could come together<br />
                        to celebrate their love for all things culinary. What started as a small blog has now grown into a <br />vibrant community of food lovers, chefs,
                        home cooks, and anyone who finds joy in the world of gastronomy.</p>

                    <p className="lead" style={{ marginLeft: '22px' }}>Over the years, we've explored cuisines from every corner of the globe, experimented with recipes,
                        interviewed talented chefs, and uncovered the stories behind iconic dishes. We've shared the latest cooking tips, kitchen hacks, and product recommendations to help you become a better home chef.</p>

                    <p className="lead" style={{ marginLeft: '22px' }}> Our founders understood that a well-prepared meal can be an incredible source of joy and
                        connection, and they wanted to share that joy with others.</p>
                    <p className="lead" style={{ marginLeft: '22px' }}>Our team of food enthusiasts came together with a mission to create a platform that celebrates food in all its forms -
                        from mouthwatering recipes and culinary tips to food culture and global cuisines.</p>
                </div>

                <div className="col-md-5 order-md-1">
                    <img src='https://assets.entrepreneur.com/content/3x2/2000/20160915213625-GettyImages-506827008.jpeg?format=pjeg&auto=webp&crop=16:9&width=675&height=380'
                        style={{ width: '550px', height: "420px", padding: "5px", margin: "40px" }} alt='' />
                </div>
            </div>

            <br />
            <br />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 >
                        <div className="text-body-secondary" style={{ marginLeft: '40px' }} >Meet Our Team</div>
                    </h2>
                    <p className="lead" style={{ padding: '35px', color: "gray" }}>Behind  our Delicious Food Site, you'll find a diverse team of foodies, chefs, and
                        writers, each with their unique perspective and expertise. We are united by our love for food and a commitment to delivering
                        high-quality content that inspires and informs.
                        We believe that the best meals are those shared with others. Join our growing community of food enthusiasts. Connect with us on social media, share your own culinary creations, and be part of the conversation. We're excited to learn from you,
                        share our experiences, and celebrate the incredible world of food together.</p>
                </div>
                <div className="col-md-5">
                    <img src='https://www.business-management-degree.net/wp-content/uploads/2020/06/shutterstock_1176110662.jpg'
                        style={{ margin: "35px" }} alt='' />
                </div>
            </div>
            <Footer />

        </>
    )
}
export default About