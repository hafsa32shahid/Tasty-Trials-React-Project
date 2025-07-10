import {motion} from 'motion/react'
import bg_img_hero from '../assets/img-sm/hero-img.jpg';
import  sm1 from '../assets/img-sm/sm1.png';
import sm2 from '../assets/img-sm/sm3.png';
import sm3 from '../assets/img-sm/sm2.jpg'

function Hero() {
    const elem_anim = {
        initial:{ opacity: 0, x: 100 } ,
        animate:{ opacity: 1, x: 0 },
         transition:{ duration: 1.5, delay: 1 ,type:"spring",stiffness:100}
       
    }
    return (
        <>
            <section className="hero-sec">
                <div className="container-fluid">
                    <div className="row flex-lg-row flex-md-column">
                        <div className="col-lg-6 col-md-12 content padding mt-5 text-sm-center text-lg-start">
                            <div className="text-and-img w-50 row px-2 flex-column d-flex align-content-center mx-sm-auto mx-lg-0">
                                <div className="col-8 my-auto">
                                    <p className='my-auto'>Welcome To Tasty Trials</p>
                                </div>
                                <div className="col-4 h-100" style={{height:"80px",width:"80px"}}><img className='w-100' src={sm1} alt="" /></div>
                            </div>
                            <h1 className=' my-4'>Tasty Trials Where Taste Brings Precious Memories</h1>
                            <div className="img-text row my-4">
                                <div className="col-4" style={{height:"100px",width:"100px"}}>
                                <img className='w-100' src={sm2} alt="" />
                                </div>
                                <div className="col-8">
                                    <p>Are you someone who enjoy great food? If so, welcome to tasty trials Where
                                    we serve up directable dishes for you</p>
                                </div>
                            </div>
                            <div className="button-dev w-auto d-flex align-content-center justify-content-between my-5 p-lg-0 p-sm-4">
                                <button className="btn shadow">Get Started</button>
                                <div className="watch-btns w-50 d-flex align-content-center justify-content-between">
                                    <button className='btn shadow w-25 rounded-circle'><i class="fa-solid fa-play"></i></button>
                                    <h5 className=" mx-auto my-auto">Watch Video</h5>
                                </div>
                            </div>
                            <div className="cutomer-review d-flex align-content-center my-5">
                                <div className="client rounded-circle" style={{height:"80px",width:"80px"}}>
                                    <img src={sm3} alt="" className='w-100'/>
                                </div>
                                <div className="client rounded-circle" style={{height:"80px",width:"80px"}}>
                                <img src={sm3} alt=""className='w-100' />
                                </div>
                                <div className="client rounded-circle" style={{height:"80px",width:"80px"}}>
                                <img src={sm3} alt="" className='w-100' />
                                </div>
                                <div className="reviews-count">
                                    <h4>Our Happy Guest</h4>
                                    <div className="reviews d-flex align-content-center">
                                    <i class="fa-regular fa-star fs-5"></i><h6 className='ms-2'>4.9 <span>(Reviews)</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 img-cont  padding position-relative"
                            style={{
                                backgroundImage: `url(${bg_img_hero})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height : '78vh'
                            }}
                        >
                            <motion.div 
                            initial={elem_anim.initial}
                            animate={elem_anim.animate}
                            transition={elem_anim.transition}
                            className="bg-box1 d-flex p-3 shadow-lg" style={{width:`250px`,height:`150px`,borderRadius:`40px`}}>
                              <div className="img rounded-circle overflow-hidden my-auto" style={{width:`90px`,height:`90px`,objectFit:`cover`}}>
                                    <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-8727.jpg?t=st=1735581118~exp=1735584718~hmac=05f9ac15c9324811277b8296459e339927ed57536677ba4686c37a21b32fb63c&w=1800" className='w-100' alt="" />

                                </div>
                                <div
                                
                                className="text my-auto mx-auto">
                                    <h5>Italian Pasta</h5>
                                    <h6 className='mt-5'>35.65</h6>
                                </div>

                            </motion.div>
                            <motion.div
                            initial={elem_anim.initial}
                            animate={elem_anim.animate}
                            transition={{...elem_anim.transition,delay:1.8}}
                            className="img-text-vert d-flex align-content-center p-3 shadow-lg" style={{width:`250px`,height:`70px`,borderRadius:`40px`}}>
                                <div className="img overflow-hidden rounded-circle my-auto" style={{width:`60px`,height:`60px`,objectFit:`cover`}}><img className='w-100' src="https://img.freepik.com/free-photo/front-view-man-arranging-cookies-display_23-2148366703.jpg?t=st=1735583484~exp=1735587084~hmac=81c6e97f24d69b4d0ea9401282c78a16270ead080127696099248e9c1c0be1c4&w=1800" alt="" /></div>
                                <div className="text mx-auto">
                                    <h5>Cooper Hayas</h5>
                                    <h6>Food Counter</h6>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
