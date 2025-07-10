import {motion} from 'motion/react'
import logo from '../assets/img-sm/logo_2.png'
import Button from './smCompo/Button';
import { animate } from 'framer-motion';
function Navbar() {
const input_anim = {
  initial: {
    width: 0,
    opacity: 0,
  },
  animate: {
    width: "220px",
    opacity: 1,
    transition: {
      duration: 1,
      type:"spring",
      stiffness: 100
    },
  },
};


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid padding">
          <a className="navbar-brand logo" href="#"><img src={logo} alt="" className=' w-100' /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item m-3">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item m-3 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">All Dishes</a></li>
                <li><a className="dropdown-item" href="#">Starters</a></li>
                <li><a className="dropdown-item" href="#">Main Course</a></li>
                <li><a className="dropdown-item" href="#">Desserts</a></li>
                <li><a className="dropdown-item" href="#">Drinks & Beverages</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Chef's Specials</a></li>
              </ul>

              </li>
              <li className="nav-item m-3">
                <a className="nav-link" href='#'>Cuisine</a>
              </li>
              <li className="nav-item m-3">
                <a className="nav-link" href='#'>Location</a>
              </li>
              <li className="nav-item m-3">
                <a className="nav-link" href='#'>Contact</a>
              </li>
            </ul>
             <motion.form
      className="nav_search d-flex position-relative align-items-center"
      role="search"
      initial="initial"
      whileHover="animate"
      style={{ width: "fit-content" }}
    >
      {/* Animated input wrapper */}
      <motion.div
        variants={input_anim}
        className="overflow-hidden"
        style={{
          height: "40px",
        }}
      >
        <input
          className="form-control search-bar shadow-none h-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            borderRadius: "20px",
            borderRight: "none",
          }}
        />
      </motion.div>

      {/* Always visible search button */}
      <motion.button
        initial={{ opacity: 1 }}
        type="button"
        className="btn position-absolute end-0 h-100 border-0 rounded-circle shadow-none"
        style={{
          width: "40px",
          height: "40px",
          right: "0",
          zIndex: 2,
        }}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </motion.button>
    </motion.form>
             <Button className="btn ms-lg-3 mt-sm-3 mt-lg-0 button"/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
