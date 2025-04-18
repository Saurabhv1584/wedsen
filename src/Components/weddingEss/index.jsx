import React from "react";
import "./style.css";

const WeddingEssential = () => {
  return (
    <>
      <header>
        <div className="contact-info">
          <span>CONTACT - 79666 8310</span>
          <span>MAIL - care@anekcreation.com</span>
        </div>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <img
            src="https://m.media-amazon.com/images/G/31/CONSTELLATION/WhatsAppIcon2x.png"
            alt="WhatsApp"
            width="60"
            height="60"
          />
        </a>

        <div className="navbar">
          <div className="logo">
            <img src="/anek-logo.ico" alt="logo1" height="20px" width="20px" />{" "}
            Anek Creations
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search Products" />
            <button>🔍</button>
          </div>
          <div className="icons">
            <span>❤ Wishlist</span>
            <span>🛒 Cart</span>
            <span>👤 Profile</span>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="header">Wedding Essentials</div>
        <div className="buttons">
          <button>Filter</button>
          <button>Sort By</button>
        </div>
        <div className="grid">
          <div className="card">
            <a href="#">
              <img
                src="https://m.media-amazon.com/images/X/bxt1/M/Ubxt1BdUOY9P42v._SL360_QL95_FMwebp_.jpg"
                alt="Haldi Jewellery"
              />
              <div className="card-content">
                <h2>Haldi Jewellery</h2>
                <p className="price">
                  ₹799 <span className="old-price">₹1200</span>
                </p>
                <p className="discount">33% Off</p>
              </div>
            </a>
          </div>

          <div className="card">
            <a href="#">
              <img
                src="https://m.media-amazon.com/images/X/bxt1/M/3bxt1Rx-q9DQXMd._SL360_QL95_FMwebp_.jpg"
                alt="Lingar Earrings"
              />
              <div className="card-content">
                <h2>Lingar Earrings</h2>
                <p className="price">
                  ₹249 <span className="old-price">₹400</span>
                </p>
                <p className="discount">37% Off</p>
              </div>
            </a>
          </div>

          <div className="card">
            <a href="#">
              <img
                src="https://m.media-amazon.com/images/X/bxt1/M/Tbxt1hqR3-nlwAd._SL360_QL95_FMwebp_.jpg"
                alt="Pink Fabric Floral Haldi Jewellery Set"
              />
              <div className="card-content">
                <h2>Pink Fabric Floral Haldi Jewellery Set</h2>
                <p className="price">
                  ₹699 <span className="old-price">₹1000</span>
                </p>
                <p className="discount">30% Off</p>
              </div>
            </a>
          </div>
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

export default WeddingEssential;
