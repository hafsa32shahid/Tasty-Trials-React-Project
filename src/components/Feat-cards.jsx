import {motion} from 'motion/react'
import Button from './smCompo/Button';
import Feat1 from '../assets/img-sm/feat-01.jpg'
import Feat2 from '../assets/img-sm/feat-02.jpg'
const Featcards = () => {
    const featCard = {
        initial:{
            x:-100,
           opacity: 0
        },
        animate:{
            x:0,
            opacity:1
        },
        transition: {
            duration:3,
            type: "tween",
            ease: "easeInOut"
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                     <motion.div
                     initial={featCard.initial}
                     whileInView={featCard.animate}
                     transition={featCard.transition}
                     viewport={{ once: true }}
                     className="col-lg-6">
                        <div className="card mb-3 rounded shadow">
                            <div className="row g-0">
                                
                                <div className="col-md-5 order-md-1">
                                    <img src={Feat2} className="img-fluid rounded w-100 h-100" alt="Biryani" />
                                </div>
                                <div className="col-md-7 order-md-0">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bolder fs-2">Each bite is a <br/> journey of culinary discovery</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                       <Button className="btn button" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="col-lg-6"
                     initial={{...featCard.initial,x:100}}
                     whileInView={featCard.animate}
                     transition={featCard.transition}
                    viewport={{ once: true }}
                    >
                        <div className="card mb-3 rounded shadow">
                            <div className="row g-0">
                            <div className="col-md-5 order-md-1">
                                <img src={Feat1} className="img-fluid w-100 h-100 rounded" alt="Salad" />
                            </div>
                                <div className="col-md-7 order-md-0">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold fs-2">Let the wholesome taste bring a smile to your face</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        </p>
                                        <Button className="btn button"/>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </motion.div>
            </div>
        </div>
    );
};

export default Featcards;
