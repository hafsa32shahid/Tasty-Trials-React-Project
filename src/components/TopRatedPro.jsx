import { useState, useEffect } from 'react';
import bgimg from '../assets/img-sm/cards-img1.jpg'
const TopRatedPro = () => {
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;

  useEffect(() => {
    fetch('./jsons/products.json')
      .then(res => res.json())
      .then(data => {
        const allProducts = Object.values(data).flat();

        const filtered = allProducts.filter(p => p.rating >= 4);

        const shuffled = filtered.sort(() => Math.random() - 0.5);

        setTopRatedProducts(shuffled);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const totalPages = Math.ceil(topRatedProducts.length / productsPerPage);
  const handleNext = () => setCurrentPage(prev => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);

  const start = currentPage * productsPerPage;
  const visibleProducts = topRatedProducts.slice(start, start + productsPerPage);

  return (
    <section id='top-dishes'>
      <div className='container-fluid my-4'>
        <div className="next-prev d-flex justify-content-end gap-4 my-5">
          <button className='button' style={{ width: "40px", height: "40px" }} onClick={handlePrev}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className='button2' style={{ width: "40px", height: "40px" }} onClick={handleNext}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="rated-pro-box">
          <div className="overlap-img p-5">
            <div className="container-fluid">
              <div className="row">
                {visibleProducts.map((product, index) => (
                  <div className="col-lg-4 col-sm-6 col-12 my-2" key={index}>
                    <div className="card top-rate-card">
                      <div className="top-card-img position-relative"
                        style={{
                          backgroundImage: product.image
                            ? `url(${product.image})`
                            : `url(${bgimg})`
                        }}


                      >

                        <div className="top-card-detail position-absolute px-3">
                          <span className='fw-bold fs-6'>{product.name}</span>
                          <div className="rating my-2">
                            <span className='fw-bold me-3'>{product.rating}</span>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <i
                                key={i}
                                className={`fa-star ${i < Math.round(product.rating) ? 'fa-solid text-warning' : 'fa-regular text-muted'}`}
                              ></i>
                            ))}

                          </div>
                          <span><b>$</b>{product.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {visibleProducts.length === 0 && (
                  <div className="text-center">No top-rated products found.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedPro;
