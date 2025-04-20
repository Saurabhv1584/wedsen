import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Cart = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919999999999', '_blank');
  };

  return (
    <>
      <div className="top-banner">
        The Wait is Over! Shop Our Grand Opening Sale – Up to 60% Off!
      </div>

      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            <img className="logo_image" src="/images/anek logo.jpg" alt="logo" />
            Anek Creations
          </Link>
          <div className="nav-links">
            <Link to="/categories" style={{ color: 'white' }}>Categories</Link>
            <Link to="/collections" style={{ color: 'white' }}>Collections</Link>
            <Link to="/all-products" style={{ color: 'white' }}>All Products</Link>
          </div>
        </div>
        <Link to="/login" className="nav-right">
          🔍
          <span>🛒 0</span>
          <Link to="/login" style={{ color: 'white' }}>Login</Link>
        </Link>
      </nav>

      <div className="main">
        <div className="main-icon">🛒</div>
        <h3>Why so light :( Your cart is empty )</h3>
        <Link to="/shop">
          <button className="discover-btn">Discover Products</button>
        </Link>
      </div>

      <footer className="site-footer">
        <div className="footer-container">

          <div className="footer-col">
            <h4>Anek Creations</h4>
            <p>Adarsh Nagar, Jollygrant,<br />Bhaniawala, Dehradun<br />Uttarakhand, 248140</p>
            <p>Phone: +91 7905668310</p>
          </div>

          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><Link to="/store-policies">Store Policies</Link></li>
              <li><Link to="/track-orders">Track Orders</Link></li>
              <li><Link to="/return-policy">Return Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/resin-art">Resin Art</Link></li>
              <li><Link to="/dreamcatcher">Dreamcatcher</Link></li>
              <li><Link to="/crochet-art">Crochet Art</Link></li>
              <li><Link to="/wedding-essentials">Wedding Essentials</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/earrings">Earrings</Link></li>
              <li><Link to="/memory-preservation">Memory Preservation</Link></li>
              <li><Link to="/rose-preservation">Rose Preservation</Link></li>
              <li><Link to="/haldi-jewellery">Haldi Jewellery</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect With Us</h4>
            <ul className="socials">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="mailto:someone@example.com">Email</a></li>
            </ul>
            <p>We accept:</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" width="40" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" alt="MasterCard" width="40" />
          </div>

        </div>
      </footer>

      <div className="whatsapp-icon" onClick={openWhatsApp}>
        💬
      </div>
    </>
  );
};

export default Cart;
