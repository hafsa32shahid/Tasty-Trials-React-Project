import React from 'react'
import logo from '../assets/img-sm/logo_2.png'
const Footer = () => {
    return (
        <footer className="container-fluid bg-black text-white p-5 mt-5">
            <div className="row">
                {/* Logo and Description */}
                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center text-center mb-4">
                    <div className="logo-box mb-3">
                        <img src={logo} alt="Tasty Trials Logo" className="img-fluid" />
                    </div>
                    <p className="fw-bold text-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui
                        doloremque explicabo tempora ab eligendi ipsum voluptatibus.
                    </p>
                </div>

                {/* Links */}
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="fw-bold">Links</h3>
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Cuisine</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Location</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Support */}
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="fw-bold">Support</h3>
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Help Center</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Track Order</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Allergen Info</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Returns & Refunds</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact Support</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Subscribe & Socials */}
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="support-email-box d-md-block d-flex flex-column justify-content-center align-items-center">
                        <h2 className='text-white'>Subscribe</h2>
                        <form
                            className="nav_search d-flex position-relative align-items-center"
                            role="search"
                            initial="initial"
                            whileHover="animate"
                            style={{ width: "fit-content" }}
                        >
                            {/* Animated input wrapper */}
                            <div

                                className="overflow-hidden"
                                style={{
                                    height: "40px",
                                }}
                            >
                                <input
                                    className="form-control search-bar text-white shadow-none bg-transparent h-100"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    style={{
                                        width: "300px",
                                        borderRadius: "20px",
                                        borderRight: "none",
                                    }}
                                />
                            </div>

                            {/* Always visible search button */}
                            <button

                                type="button"
                                className="button position-absolute end-0 h-100 border-0 shadow-none"
                                style={{
                                    right: "0",
                                    zIndex: 2,
                                }}
                            >
                                Submit
                            </button>
                        </form>
                        <div className="media-box mt-4">
                            <h2 className='text-white'>Visit our Accounts</h2>
                            <ul className=' media-links navbar-nav d-flex flex-row justify-content-start'>

                                <li className='nav-item media'><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li className='nav-item media'><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                                <li className='nav-item media'><a href=""><i class="fa-brands fa-tiktok"></i></a></li>
                                <li className='nav-item media'><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                                <li className='nav-item media'><a href=""><i class="fa-brands fa-youtube"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <hr className="my-4 border-light" />
            <div className="text-center">
                <p className="mb-0 text-white">
                    &copy; 2025 <strong>Tasty Trials</strong>. All rights reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer
