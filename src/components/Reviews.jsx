import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const Reviews = () => {
   const [reviews,setReviews] = useState([]);
    useEffect(() => {
    fetch("/jsons/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to fetch reviews:", err));
  }, []);
    return (
        <>
            <section id='testimonials'>
                <div className="container-fluid">
                <div className="review-detail text-center">
                    <h1 className="fw-bold">Customer Experience</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem in veniam rem aspernatur
                        ratione necessitatibus voluptates sed illum ab quidem error vitae accusamus,<br /> saepe repellat reiciendis,
                        nesciunt inventore eligendi!
                    </p>
                </div>

                <div className="carousel">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((review,index) => (

                            <div className="col-3">
                                <SwiperSlide  key={index} >
                                    <div className="card" style={{ borderRadius: "20px",backgroundColor: index % 2 === 0 ? "#efc79d" : "#ffffff"}}>
                                       <div className="d-flex align-items-center p-3">
                                           <div className="cli-img me-5" style={{backgroundImage: `url(${review.image})`}}>
                                               
                                           </div>
                                           <div className="cli-detail">
                                              <h5 className='fw-bold'>{review.name}</h5>
                                           </div>
                                       </div>
                                        <div className="card-body my-3">
                                          <div className="fs-4 d-flex align-items-center gap-2">
                                            {[1, 2, 3, 4, 5].map((index) => (
                                                <i
                                                key={index}
                                                className={`fa-star fa${index <= review.rating ? 's' : 'r'} fa-solid ${index <= review.rating ? 'text-warning' : 'text-muted'}`}
                                                ></i>
                                            ))}
                                            <h5 className="card-title ms-2 mb-0">{review.rating}.0</h5>
                                            </div>


                                            
                                            <p className="card-text mt-4">
                                              {review.review}
                                            </p>
                                            <a href="#"  className='text-black fw-bold'>
                                                Read More <i class="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>

                        ))}
                    </Swiper>
                </div>
            </div>
            </section>
        </>
    );
};

export default Reviews;
