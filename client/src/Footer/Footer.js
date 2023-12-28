import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="container">
                    <footer className="py-5 footer">
                        <div className="row">
                            <div className="col-2 col-md-2 mb-3">
                                <Link to="/booking" className='btn btn-danger'>
                                    Book now
                                </Link>
                                <div className="nav flex-column mt-3 button-text">
                                    <p>Ready, set, order!</p>
                                </div>
                            </div>
                            <div className="col-2 col-md-2 mb-3">
                                <h5 className='footerhead'>Useful Links</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><Link to="/home" className="text-light nav-link p-0">Home</Link></li>
                                    <li className="nav-item mb-2"><Link to="/about" className="text-light nav-link p-0">About Us</Link></li>
                                    <li className="nav-item mb-2"><Link to="/menu" className="text-light nav-link p-0">Menus</Link></li>
                                    <li className="nav-item mb-2"><Link to="/contact" className="text-light nav-link p-0">Contact</Link></li>
                                    <li className="nav-item mb-2"><Link to="/privacypolicy" className="text-light nav-link p-0">Privacy Policy</Link></li>

                                </ul>
                            </div>

                            <div className="col-2 col-md-2 mb-3">
                                <h5 className='footerhead'>Contact</h5>
                                <ul className="nav flex-column">
                                    <p>2nd Floor, Cloud Nine, Railway Road, Rishikesh</p>
                                    <li className="nav-item"><p className='fw-bold'>Phone :</p><Link to="$" className="text-light nav-link p-0">(+91) - 895821289</Link></li>
                                    <li className="nav-item"><p className='fw-bold'>Email :</p><Link to="#" className="text-light nav-link p-0">weservefull@gmail.com</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-1 mb-3">
                                <h3 className='websitehead'>FullTummy</h3>
                                <p>Satisfying Cravings,
                                    <span className='websitespan'>
                                        One Delivery at a Time.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top">
                            <p>@Copyright FullTummy, Designed by - Improvisers</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3"><Link className="link" to="#"><i className="fa fa-twitter" style={{ width: "24px", height: "24px", color: 'white' }}></i></Link></li>
                                <li className="ms-3"><Link className="link" to="#"><i className="fa fa-instagram" style={{ width: "24px", height: "24px", color: 'white' }}></i></Link></li>
                                <li className="ms-3"><Link className="link" to="#"><i className="fa fa-facebook" style={{ width: "24px", height: "24px", color: 'white' }}></i></Link></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;