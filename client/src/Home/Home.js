import React, { useEffect, useState } from 'react'
import './Home.css';
import HomeBackground from './Images/HomeBackground.jpg';
import logotwo from './Images/cafetwo.webp'
import logothree from './Images/logothree.jpeg'
import cafefour from './Images/cafefour.jpeg'
import offerlimited from './Images/OfferLimited.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    class TypeWriter {
      constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 8);
        this.type();
        this.isDeleting = false;
      }

      type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];


        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // change color for data-text
        this.txtElement.innerHTML = `<span class="txt" style="color: #e2000f;">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
          typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait;
          // Set delete to true
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          // Move to next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 300;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }


    document.addEventListener('DOMContentLoaded', init);

    function init() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }
  })

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={HomeBackground} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <div className="header-col1">
                <h1>Hate cooking?<br /> We’re for you.</h1>
                <p style={{ fontSize: '23px' }}>One cannot think well, love well, sleep well,<br /> if one has not dined well.</p>
                <span class="txt-type" data-wait="3000" data-words='["Love", "Hate", "Pain", "Joy", "Fun", "Adventures"]'></span>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <div className='button'>
                  <Link className="btn btn-lg" to="/booking">Book table</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className='sectionone fade-in'>
            <div className='abouthead'>
              <h2>Our Ambience</h2>
            </div>
            <div className='learnmore'>
              <div className='learn'>
                <h1>Themed &</h1>
              </div>
              <div className='moreabout'>
                <h1>Elegant</h1>
              </div>

            </div>
          </div>

          <div className='sectiontwo'>
            <div className='twopics'>
              <div className='picone slide-I'>
                <img className='one' src={logothree} alt='' />
                <div className='mesgo'>
                  <br />
                  <p><b style={{ textTransform: 'capitalize' }}>Ambience with premium interior decor</b></p>
                </div>
              </div>
              <div className='picone slide-In'>
                <img className='two' src={logotwo} alt='' />
                <div className='mesgtw'>
                  <br />
                  <p><b style={{ textTransform: 'capitalize' }}>Ambience with premium outside sitting</b></p>
                </div>
              </div>
              <div className='picone slide-Inn'>
                <img className='three' src={cafefour} alt='' />
                <div className='mesgth'>
                  <br />
                  <p><b style={{ textTransform: 'capitalize' }}>Premium roof decor available</b></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      {showModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered animate_ _animated animate_ _slideIn">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Grab Our Special Edition !</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body text-center">
                <img src={offerlimited} alt="Cafe" style={{ width: '100%', height: 'auto' }} />
                <Link to="/menu" className='btn btn-success'>Check Offers !</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;