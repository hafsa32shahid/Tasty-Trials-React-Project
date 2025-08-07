import { motion } from 'motion/react'
import logo from '../assets/img-sm/logo_2.png'
import Button from './smCompo/Button';
import { animate } from 'framer-motion';
function Navbar() {
  const navLinks = [
    { label: "Home", target: "#home" },
    { label: "Services", target: "#services" },
    { label: "Categories", target: "#categories" },
    { label: "Top Dishes", target: "#top-dishes" },
    { label: "Testimonials", target: "#testimonials" }
  ];


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
        type: "spring",
        stiffness: 100
      },
    },
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-3 px-md-4">
          <a className="navbar-brand logo" href="#">
            <img src={logo} alt="Logo" className="w-100" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
             <ul className="navbar-nav m-auto text-center">
  {navLinks.map((item, index) => (
    <li className="nav-item m-2 m-lg-3" key={index}>
      <a className="nav-link" href={item.target}>
        {item.label}
      </a>
    </li>
  ))}
</ul>


            <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
              {/* Search Form */}
              <motion.form
                className="nav_search d-flex position-relative align-items-center"
                role="search"
                initial="initial"
                whileHover="animate"
                style={{ width: "fit-content" }}
              >
                <motion.div
                  variants={input_anim}
                  className="overflow-hidden"
                  style={{ height: "40px" }}
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

              {/* CTA Button */}
              <Button className="btn ms-lg-3 button" />
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
