import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";


const items = [
    {
      img: "https://m.media-amazon.com/images/X/bxt1/M/obxt1BWQCV4ul0a._SL360_QL95_FMwebp_.jpg",
      alt: "Earrings",
      label: "Crochet",
    },
    {
      img: "https://m.media-amazon.com/images/X/bxt1/M/Rbxt1BqRLNFMFZ7._SL360_QL95_FMwebp_.jpg",
      alt: "Resin Frame",
      label: "Resin Frame",
    },
    {
      img: "https://m.media-amazon.com/images/X/bxt1/M/Tbxt1hqR3-nlwAd._SL360_QL95_FMwebp_.jpg",
      alt: "Dream Catcher",
      label: "Dream Catcher",
    },
  ];

const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlide = (direction) => {
      let newIndex = currentIndex + direction;
      if (newIndex < 0) newIndex = items.length - 1;
      if (newIndex >= items.length) newIndex = 0;
      setCurrentIndex(newIndex);
    };

  return (
    <>
      <header >
        <div class="contact-info">
          <span>CONTACT - 79666 8310</span>
          <span>MAIL - care@anekcreation.com</span>
        </div>
        <div class="navbar">
            <Link to="/">
            <div class="logo">Anek Creations</div>
            </Link>
          <div class="search-bar">
            <input type="text" placeholder="Search Products" />
            <span class='search_icon'>🔍</span>
          </div>
          <div class="icons">
            <span>❤ Wishlist</span>
            <span>🛒 Cart</span>
            <span>
              <Link to="/login">👤 Profile</Link>
            </span>
          </div>
        </div>
      </header>

      <section class="categories">
        <div class="category">
          <img
            src="https://m.media-amazon.com/images/X/bxt1/M/dbxt1BLkha9lw9C._SL360_QL95_FMwebp_.jpg"
            alt="Dream Catcher"
          />
          <Link to="/dreamCatcher">
            <p>Dream Catcher</p>
          </Link>
        </div>
        <div class="category">
          <img
            src="https://m.media-amazon.com/images/X/bxt1/M/fbxt1RgNf0ST9Hm._SL360_QL95_FMwebp_.jpg"
            alt="Resin Art"
          />
          <Link to="/resin">
            <p>Resin Art</p>
          </Link>
        </div>
        <div class="category">
          <img
            src="https://m.media-amazon.com/images/X/bxt1/M/Ybxt1BtlV4luSpM._SL300_QL95_FMwebp_.png"
            alt="Wedding Essential/Rakhi"
          />
          <Link to="/weddingEssential">
            <p>Wedding Essential</p>
          </Link>
        </div>
        <div class="category">
          <img
            src="https://m.media-amazon.com/images/X/bxt1/M/Wbxt1RNRkBaYL-r._SL300_QL95_FMwebp_.png"
            alt="Crochet Art"
          />
          <Link to="/crochet">
            <p>Crochet Art</p>
          </Link>
        </div>
      </section>

      <section class="product-highlights">
        <section id="food">
          <h2>Featured Products</h2>
          <div class="food-container container">
            <div class="food-type fruite">
              <div class="img-container">
                <img
                  src="https://m.media-amazon.com/images/X/bxt1/M/cbxt1Be3cjyjNmF._SL360_QL95_FMwebp_.jpg"
                  alt="error"
                />
                <div class="img-content">
                  <h3>₹199</h3>
                  <Link
                    to="https://en.wikipedia.org/wiki/Fruit"
                    class="btn btn-primary"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div class="food-type vegetable">
              <div class="img-container">
                <img
                  src="https://m.media-amazon.com/images/X/bxt1/M/obxt1BWQCV4ul0a._SL360_QL95_FMwebp_.jpg"
                  alt="error"
                />
                <div class="img-content">
                  <h3>₹999</h3>
                  <Link
                    to="https://en.wikipedia.org/wiki/Vegetable"
                    class="btn btn-primary"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div class="food-type grin">
              <div class="img-container">
                <img
                  src="https://m.media-amazon.com/images/X/bxt1/M/fbxt1xWa1dKQ7Zc._SL360_QL95_FMwebp_.jpg"
                  alt="error"
                />
                <div class="img-content">
                  <h3>Customize Item</h3>
                  <Link
                    to="https://en.wikipedia.org/wiki/Grain"
                    class="btn btn-primary"
                  >
                    Customise Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="best-sellers">
      <div className="slider-container">
        <h2>Some of Our Best Sellers</h2>
        <div className="seller-slider">
          {items.map((item, index) => (
            <div
              key={index}
              className="seller-item"
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <Link to="">
                <img src={item.img} alt={item.alt} />
              </Link>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <button className="prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>
    </section>

      {/* Testimonials Section  */}
      <section class="testimonials">
        <h2>What Our Customers Say</h2>
        <div class="testimonial-container">
          <div class="testimonial">
            <p>
              "I absolutely love my dream catcher! It's beautifully made and
              adds a lovely touch to my room."
            </p>
            <span>- Sarah J.</span>
          </div>
          <div class="testimonial">
            <p>
              "The resin art I purchased was stunning! It exceeded my
              expectations and looks amazing on my wall."
            </p>
            <span>- Mark T.</span>
          </div>
          <div class="testimonial">
            <p>
              "Anek Creations has the best handcrafted items. I always find
              unique gifts for my friends and family."
            </p>
            <span>- Emily R.</span>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="feature">
          <span>👥</span>
          <p>900+ Happy Customers</p>
        </div>
        <div class="feature">
          <span>🎨</span>
          <p>Handcrafted Items</p>
        </div>
        <div class="feature">
          <span>💰</span>
          <p>Great Prices</p>
        </div>
        <div class="feature">
          <span>🚚</span>
          <p>Timely Delivery</p>
        </div>
      </section>

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

export default Home;
