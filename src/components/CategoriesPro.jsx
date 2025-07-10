import { useEffect, useState } from 'react'
import feat from '../assets/img-sm/feat-01.jpg'

const CategoriesPro = () => {
  const [allProducts, setAllProducts] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Dishes");


  const categories = [
    { name: "Dishes", image: feat },
    { name: "Salads", image: feat },
    { name: "Appetizers", image: feat },
    { name: "Soups", image: feat },
    { name: "Desserts", image: feat }
  ];

  useEffect(() => {
    // Load JSON only once
    fetch('/jsons/products.json')
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, []);


  useEffect(() => {
    if (allProducts[activeCategory]) {
      setFilteredProducts(allProducts[activeCategory]);
    }
  }, [activeCategory, allProducts]);
  return (
    <div className='container-fluid'>
      <h1 className='fw-bold text-center'>What We Are Offering <br /> To Our Clients</h1>
      <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, error provident? Beatae veniam aspernatur ex itaque, maiores provident. <br />
        magnam praesentium quia officiis non officia cupiditate unde quae! Odit.</p>
      <div className="container-fluid">
        <div className="row">
          {/* 1. Desktop Version — Always visible on md and up */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="products-cat-buttons d-flex align-items-center justify-content-center flex-lg-column w-100 shadow">
              <h3 className='fw-bold mb-4'>Categories</h3>
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className={`categ-button shadow d-flex align-items-center justify-content-between ${index !== 0 ? "mt-3" : ""} ${activeCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.name)}
                >
                  <div
                    className="categ-btn-img"
                    style={{ backgroundImage: `url(${cat.image})` }}
                  ></div>
                  <p className="fw-bolder m-auto">{cat.name}.</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Mobile/Tablet Version — Collapsible menu */}
          <div className="col-12 d-lg-none">
            {/* Toggle Button */}
           <div className="d-flex justify-content-center">
              <button
              className="navbar-toggler my-3 button2 w-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#categoryMenu"
              aria-controls="categoryMenu"
              aria-expanded="false"
              aria-label="Toggle categories"
            >
              <i class="fa-solid fa-bars"></i> <span className="ms-2">Categories Menu</span>
            </button>
           </div>

            {/* Collapsible Categories for mobile */}
            <div className="collapse" id="categoryMenu">
              <div className="products-cat-buttons d-flex align-items-center justify-content-center flex-row flex-wrap gap-2 w-100 shadow">
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    className={`categ-button shadow d-flex align-items-center justify-content-between `}
                    onClick={() => setActiveCategory(cat.name)}
                  >
                    <div
                      className="categ-btn-img"
                      style={{ backgroundImage: `url(${cat.image})` }}
                    ></div>
                    <p className="fw-bolder m-auto">{cat.name}.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Product Cards */}
          <div className="col-lg-9">
            <div className="row">
              {filteredProducts.map((item, index) => (
                <div className="col-md-4 col-sm-6 mb-5 position-relative" key={index} style={index >= 3 ? { marginTop: "10px" } : {}}>
                  <div
                    className="card-box position-relative"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="detail-box w-100 d-flex align-items-center justify-content-center">
                      <div className="card-detals position-absolute">
                        <h4 className="fw-bold text-center">{item.name}</h4>
                        <p className="text-center">{item.description}</p>
                        <div className="d-flex align-items-center justify-content-evenly mt-3">
                          <h5><b>{item.price.toFixed(2)}</b> $</h5>
                          <button className="button">Add To Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>



        </div>
      </div>
    </div>

  )
}

export default CategoriesPro

