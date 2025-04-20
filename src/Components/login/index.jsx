import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }

    // Simulate login delay
    setTimeout(() => {
      navigate("/"); // Redirects to home page
    }, 1000);
  };
  return (
    <div className="login-background">
      <nav className="navbar">
        <Link to="/">
          <img
            className="logo_image_login"
            src="/images/anek logo.jpg"
            alt="logo"
            width="13px"
          />
        </Link>
      </nav>
      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />{" "}
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />{" "}
            <label>Password</label>
          </div>
          <button type="submit">Sign In</button>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Link to="#">Need help?</Link>
          </div>
        </form>
        <p>
          New user? <Link to="#">Sign up now</Link>
        </p>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <Link to="#">Learn more.</Link>
        </small>
      </div>
    </div>
  );
};

export default Login;
