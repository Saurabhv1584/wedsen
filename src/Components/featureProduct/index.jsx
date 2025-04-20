import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import featureProductsData from "../../data/item_999.json";
import "./style.css";

const FeartureProduct = () => {
  const [isPriceDescending, setIsPriceDescending] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);
  const location = useLocation();
  const { filterType, data, title } = location.state || {};
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('data', data)
    console.log('filterType', filterType)
    if (data && Array.isArray(data)) {
      setProducts(data);
    } else {
      // Fallback: Load from default JSON or show message
      setProducts([]); 
    }
  }, []);

  const updateQuantity = (e, index, delta) => {
    e.preventDefault();
    setProducts((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const handleFavClick = (item) => {
    console.log("Favorited:", item.title);
  };

  const handleFilterClick = () => {
    if (!isFiltered) {
      const filtered = featureProductsData.filter((item) =>
        item.title.toLowerCase().includes("frame")
      );
      setProducts(filtered);
    } else {
      setProducts(featureProductsData);
    }
    setIsFiltered(!isFiltered);
  };

  const handleSortByPriceClick = () => {
    const sorted = [...products].sort((a, b) =>
      isPriceDescending ? b.price - a.price : a.price - b.price
    );
    setProducts(sorted);
    setIsPriceDescending(!isPriceDescending);
  };

  return (
    <>
      <header>
        <div className="contact-info">
          <span>CONTACT - 79666 8310</span>
          <span>MAIL - care@anekcreation.com</span>
        </div>
        <div className="navbar">
          <Link to='/' className="logo">
            <img
              className="logo_image"
              src="/images/anek logo.jpg"
              alt="logo1"
              height="20px"
              width="20px"
            />
            Anek Creations
          </Link >
          <div className="search-bar">
            <input type="text" placeholder="Search Products" />
            <button>🔍</button>
          </div>
          <div className="icons">
            <span><Link to="/favourite">❤ Wishlist</Link></span>
            <span><Link to="/cart">🛒 Cart</Link></span>
            <span><Link to="/login">👤 Profile</Link></span>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="header">{title ? title : 'Items list'}</div>
        <div className="buttons">
          <button onClick={handleFilterClick}>Filter by Frame</button>
          <button onClick={handleSortByPriceClick}>Sort by Price</button>
        </div>

        <div className="grid">
          {products.map((item, index) => (
            <div className="card" key={index}>
              <div className="fav-icon-wrapper">
                <button
                  className="fav-button"
                  onClick={() => handleFavClick(item)}
                  title="Add to Wishlist"
                >
                  ❤️
                </button>
              </div>
              <Link to={`/product/${index}`}>
                <img src={item.image} alt={item.title} />
                <div className="card-content">
                  <h2>{item.title}</h2>
                  <p className="price">
                    ₹{item.price}{" "}
                    <span className="old-price">₹{item.oldPrice}</span>
                  </p>
                  <p className="discount">{item.discount}</p>

                  <div className="quantity-controls">
                    <button onClick={(e) => updateQuantity(e, index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={(e) => updateQuantity(e, index, 1)}>+</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-columns">
          <div>
            <h3>Contact</h3>
            <p>Phone: 796668310</p>
            <p>Email: care@anekcreation.com</p>
          </div>
          <div>
            <h3>Categories</h3>
            <p>All Products</p>
            <p>Resin Art</p>
            <p>Crochet Art</p>
            <p>Jewellery</p>
          </div>
          <div>
            <h3>Information</h3>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy & Policy</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p>My Account</p>
            <p>Order Track</p>
            <p>Questions?</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Anek Creations. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default FeartureProduct;
