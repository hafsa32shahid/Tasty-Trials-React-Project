import { motion } from 'framer-motion';
import cheif1 from '../assets/img-sm/chief1.jpg';

const chiefs = [
  { name: "John-117", role: "Spartan Leader", img: cheif1 },
  { name: "Carter-A259", role: "Noble Team Commander", img: cheif1 },
  { name: "Frederic-104", role: "Tactical Expert", img: cheif1 },
  { name: "Linda-058", role: "Sniper Specialist", img: cheif1 },
];

const Cheifs_profile = () => {
  return (
    <div className="container-fluid mt-5">
      <motion.div
        className="cheifs-detail text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="fw-bold">Tasty Trials Master Cheifs</h1>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, fugit assumenda porro animi fuga impedit
          corporis
          <br />
          magnam distinctio. consequatur veniam alias earum! Eius, inventore quidem.
        </p>
      </motion.div>

      <div className="row m-4 gap-sm-0 gap-2">
        {chiefs.map((chief, index) => (
          <motion.div
            className={`col-sm-6 col-lg-3 position-relative mt-lg-0 ${index > 1 ? "mt-sm-2" : "mt-0"}`}
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
          >
            <div
              className="chief-box position-relative"
              style={{
                backgroundImage: `url(${chief.img})`
              }}
            >
              <div className="detail-box w-100 h-100 d-flex align-items-end justify-content-center p-3">
                <motion.div
                  className="chief-detals text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                >
                  <h4>{chief.name}</h4>
                  <p>{chief.role}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cheifs_profile;
