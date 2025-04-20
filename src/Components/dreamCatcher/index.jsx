import React, { useState } from "react";
import "./style.css";
import dreamcatcherItem from "../../data/dreamcatcherItems.json";
import { Link } from "react-router-dom";

const DreamCatcher = () => {
  const [products, setProducts] = useState(dreamcatcherItem);
  const [isPriceDescending, setIsPriceDescending] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFavClick = (item) => {
    console.log("item", item);
  };
  const updateQuantity = (e,index, delta) => {
    e.preventDefault();
    setProducts((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + delta),
            }
          : item
      )
    );
  };


  const handleFilterClick = () => {
    console.log("Filter clicked");
    if (!isFiltered) {
      const filteredProducts = dreamcatcherItem.filter(item =>
        item.title.toLowerCase().includes("dreamcatcher")
      );
      setProducts(filteredProducts);
    } else {
      setProducts(dreamcatcherItem); // Reset to original list
    }
    setIsFiltered(!isFiltered); // Toggle filter state
  };
  
  const handleSortByPriceClick = () => {
    console.log("Sort By Price clicked");
    const sortedProducts = [...products].sort((a, b) =>
      isPriceDescending ? b.price - a.price : a.price - b.price
    );
    setProducts(sortedProducts);
    setIsPriceDescending(!isPriceDescending); // Toggle for next click
  };
  

  return (
    <>
      <header>
        <div class="contact-info">
          <span>CONTACT - 79666 8310</span>
          <span>MAIL - care@anekcreation.com</span>
        </div>
        <div class="navbar">
          <Link to='/' class="logo">
            <img
              class="logo_image"
              src="/images/anek logo.jpg"
              alt="logo1"
              height="20px"
              width="20px"
            />
            Anek Creations
          </Link >
          <div class="search-bar">
            <input type="text" placeholder="Search Products" />
            <button>🔍</button>
          </div>
          <div class="icons">
                        <span>
              <Link to="/favourite">❤ Wishlist</Link>
            </span>
                        <span>
              <Link to="/cart">🛒 Cart</Link>
            </span>
            <span>
<Link to='/login'>👤 Profile</Link>
</span>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="header">Dreamcatcher</div>
        <div class="buttons">
          <button class='sort_by_btn' onClick={() => handleFilterClick()}>Filter by name</button>
          <button class='sort_by_btn' onClick={() => handleSortByPriceClick()}>Sort By Price</button>
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
              <a href="#">
                <img src={item.image} alt={item.title} />
                <div className="card-content">
                  <h2>{item.title}</h2>
                  <p className="price">
                    ₹{item.price}{" "}
                    <span className="old-price">₹{item.oldPrice}</span>
                  </p>
                  <p className="discount">{item.discount}</p>

                  <div className="quantity-controls">
                    <button onClick={(e) => updateQuantity(e,index, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={(e) => updateQuantity(e,index, 1)}>+</button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div class="footer-columns">
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
        <div class="footer-bottom">
          <p>&copy; 2023 Anek Creations. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default DreamCatcher;
