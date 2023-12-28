import { Link } from 'react-router-dom';
import './Contact.css';
import { Controller, Scene } from 'react-scrollmagic';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Contact = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200 && !isAnimated) {
                setIsAnimated(true);
            }

        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isAnimated])

    const AddUser = async(e) =>{
        e.preventDefault();
        const url = "http://localhost:8000/contact";
        let result = await fetch(url, {
            method:"POST",
            body: JSON.stringify({
                name,email,subject,message
            }),
            headers:{
                "content-type":"application/json"
            }
        })
        result = await result.json();
        if(result){
            alert(`User is saved ${"\n"} Visit again!`)
        }
    }
    return (
        <>
        <Navbar />
            <div className="mainhead">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className=" effect breadcrumb-hero slide-d bg-danger text-light">
                        <div className="container">
                            <div className="breadcrumb-hero ">
                                <h2>Contact</h2>
                                <p>Having a hard time figuring out our menu?
                                    <span>
                                        No Worries, we'll send a decoder.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ol>
                            <li><Link className='contact-link text-danger' to="/home">Home</Link></li>
                            <li style={{ paddingLeft: '10px' }}>Contact</li>
                        </ol>
                    </div>
                </section>
                <section id="contact" className="contact">
                    <div className="container">

                        <div>
                            <iframe style={{ border: "0", width: "100%", height: "270px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14732.479715390736!2d78.267612!3d30.086928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905f668e3e6d9b1%3A0x29d8fd884c2007e!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1636006653064!5m2!1sen!2sin" frameBorder="0" allowFullScreen="" title='rishikesh_map'></iframe>
                        </div>

                        <div className="row mt-5">

                            <div className="col-lg-4  aos-init aos-animate" data-aos="fade-right">
                                <div className="info">
                                    <Controller>
                                        <Scene duration={300} offset={-100} triggerHook="onEnter">
                                            <div className={`address ${isAnimated ? 'slide-l' : ''}`}>
                                                <i className="fa fa-map text-danger"></i>
                                                <h4>Location:</h4>
                                                <p>City Center, Rishikesh, Uttarakhand</p>
                                            </div>
                                        </Scene>
                                    </Controller>
                                    <Controller>
                                        <Scene offset={-100} duration={350} triggerHook="onEnter">
                                            <div className={`email ${isAnimated ? 'slide-left' : ''}`}>
                                                <i className="fa fa-envelope text-danger"></i>
                                                <h4>Email:</h4>
                                                <p>WeServeFull@FullTummy.com</p>
                                            </div>
                                        </Scene>
                                    </Controller>
                                    <Controller>
                                        <Scene duration={400} offset={-100} triggerHook="onEnter">
                                            <div className={`phone ${isAnimated ? 'Slide-Left' : ''}`}>
                                                <i className="fa fa-phone text-danger"></i>
                                                <h4>Call:</h4>
                                                <p>(+91) - 895821289</p>
                                            </div>
                                        </Scene>
                                    </Controller>
                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0 aos-init aos-animate" data-aos="fade-left">
                                <Controller>
                                    <Scene duration={600} offset={100} triggerHook="onEnter">
                                        <form onSubmit={AddUser} className={`${isAnimated ? 'slide-r': ''}`}>
                                            <div className="row">
                                                <div className="col-md-6 form-group">
                                                    <input type="text" name="name" value={name} className="form-control" id="name" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} required="" />
                                                </div>
                                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                                    <input type="email" value={email} className="form-control" name="email" id="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} required="" />
                                                </div>
                                            </div>
                                            <div className="form-group mt-3">
                                                <input type="text" className="form-control" value={subject} name="subject" id="subject" placeholder="Subject" onChange={(e)=>setSubject(e.target.value)} required="" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <textarea className="form-control" name="message" value={message} rows={5} placeholder="Message" onChange={(e)=>setMessage(e.target.value)} required=""></textarea>
                                            </div>
                                            <div className="text-center mt-4"><button className='btn btn-outline-danger' type="submit">Send Message</button></div>
                                        </form>
                                    </Scene>
                                </Controller>

                            </div>

                        </div>

                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contact;