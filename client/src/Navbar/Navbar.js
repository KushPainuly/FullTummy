import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className='yummy'>
                        <h1 className='websitehead '>FullTummy</h1>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link px-2 text-secondary" style={{textDecoration:'none', marginRight: '10px'}}>
                                    <b>Home</b>
                                <span className="underline"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link px-2 text-secondary" style={{textDecoration:'none', marginRight: '10px'}}>
                                    <b>About</b>
                              <span className="underline"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link px-2 text-secondary" style={{textDecoration:'none', marginRight: '10px'}}>
                                    <b>Menu</b>
                               <span className="underline"></span>
                            </Link>
                            </li>
                        <li className="nav-item">
                            <Link to="/review" className="nav-link px-2 text-secondary" style={{textDecoration:'none', marginRight: '10px'}}>
                                    <b>Review</b>
                                <span className="underline"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link px-2 text-secondary" style={{textDecoration:'none', marginRight: '10px'}}>
                                    <b>Contact</b>
                                <span className="underline"></span>
                            </Link>
                        </li>
                    </ul>

                    <div className="navbutton">
                        <Link className="btn btn-outline-primary me-2" to="/booking">Book a table</Link>

                    </div>
                </header>
            </div>
        </>
    )
}

export default Navbar;