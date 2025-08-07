import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import sm3 from '../assets/img-sm/sm3.png';

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const cust = {
    initial: {
      opacity: 0,
      y: -15,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn",
    },
  };

  return (
    <section id='services'>
      <div className="services container-fluid">
      <div className="row">
        <motion.div
          ref={ref}
          initial={{ scale: 0 }}
          style={{ scale }}
          transition={{ duration: 2 }}
          className="col-md-6"
        >
          <div className="serv-img-box position-relative rounded">
            <div className="service-detail-box shadow position-absolute overflow-hidden d-flex flex-column align-items-center justify-content-center">
              <div className="cutomer-review d-flex align-content-center ms-5">
                {[0, 2, 5, 7].map((delay, index) => (
                  <motion.div
                    key={index}
                    initial={{ ...cust.initial, y: index % 2 ? 15 : -15 }}
                    whileInView={cust.animate}
                    transition={{ ...cust.transition, delay }}
                    className="client rounded-circle"
                    style={{ height: "40px", width: "40px" }}
                  >
                    <img src={sm3} alt="" className="w-100" />
                  </motion.div>
                ))}
              </div>
              <p>10k+ people involved</p>
            </div>
          </div>
        </motion.div>

        <div className="col-md-6">
          <div className="serv-details text-lg-start text-center">
            <h5 className="fw-bolder fs-2">Effortless Online Ordering Made Simple</h5>
            <p className="fw-normal my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam in
              tempora quibusdam repellat quisquam quo. Ab eligendi rem, officiis dicta
              pariatur tempora placeat beatae.
            </p>
            <div className="service-btns d-flex align-items-center gap-3 justify-content-center">
              <button className="button">Contact Us</button>
              <button className="btn shadow button2">Check Menu</button>
            </div>


            <div className="row mt-5 justify-content-center w-100">
              {[
                "fa-cart-shopping",
                "fa-asterisk",
                "fa-comments",
                "fa-first-order-alt",
              ].map((icon, i) => (
                <div className="col-sm-6 col-12 mt-4 d-flex justify-content-center" key={i}>
                  <div className="service-1 w-75 shadow d-flex align-items-center justify-content-between bg-light overflow-hidden px-3 py-2">
                    <div className="icon-box me-3 d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                      <i className={`fa-solid ${icon} fs-5`}></i>
                    </div>
                    <p className="fw-bolder mb-0 me-2">Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
