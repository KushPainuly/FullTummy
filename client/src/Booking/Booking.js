import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";


const Booking = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [peoples, setPeoples] = useState("");
    const [address, setAddress] = useState("");

    const BookUser = async (e) => {
        e.preventDefault();
        const url = "http://localhost:8000/booking";
        let booking = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name, email, phone, date, time, peoples, address
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        booking = await booking.json();
        if(booking){
            alert(`Thank you for visting us ${"\n\n"} we will reach out shortly!`);
            handleReset();
        }
    }

    const handleReset = () => {
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTime("");
        setPeoples("");
        setAddress("")
    }
    return (
        <>
            <Navbar />
            <form onSubmit={BookUser}>
                <section className="h-100 ">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="card card-registration my-4">
                                    <div className="row g-0">
                                        <div className="col-xl-6 d-none d-xl-block">
                                            <img src="https://www.cityshor.com/uploads/article/01_2023/1674454559_326348518_5771787569578464_4979584290918423820_n.jpg" height="100pxs"
                                                alt="Sample_photo" className="img-fluid"
                                                style={{ BorderTopLeftRadius: ".50rem", BorderBottomLeftRadius: ".25rem" }} />
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="card-body p-md-5 text-black">
                                                <h5 className="mb-5 text-uppercase">BOOK A TABLE :
                                                    <Link href="telto: (+91) - 8126703794" style={{ marginLeft: '20px' }}> (+91) - 8126703794</Link>
                                                </h5>
                                                <h3 className="mb-5 text-uppercase">Book Your Stay With Us</h3>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form3Example1m">Your Name</label>
                                                            <input type="text" id="form3Example1m" value={name} onChange={(e) => setName(e.target.value)} className="form-control form-control-lg" />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form3Example1n">Your Email</label>
                                                            <input type="text" id="form3Example1n" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />

                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form3Example1m1">Your Phone No.</label>
                                                            <input type="text" id="form3Example1m1" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control form-control-lg" />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form3Example1n1">Date</label>
                                                            <input type="date" id="form3Example1n1" value={date} onChange={(e) => setDate(e.target.value)} className="form-control form-control-lg" />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form3Example1m1">Time</label>
                                                            <input type="time" id="form3Example1m1" value={time} onChange={(e) => setTime(e.target.value)} className="form-control form-control-lg" />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form3Example1n1">No. Of Peope</label>
                                                            <input type="number" id="form3Example1n1" value={peoples} onChange={(e) => setPeoples(e.target.value)} className="form-control form-control-lg" />

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form3Example8">Address</label>
                                                    <input type="Address" id="form3Example8" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control form-control-lg" />

                                                </div>
                                                <div className="row">
                                                    <div className="d-flex justify-content-end pt-3">
                                                        <button type="button" className="btn btn-light btn-lg" onClick={handleReset}>Reset all</button>
                                                        <button type="submit" className="btn btn-warning btn-lg ms-2">Book A Table</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <Footer />
        </>
    )
}

export default Booking;