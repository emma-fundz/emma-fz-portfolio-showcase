
import { useEffect, useRef } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      // Insert our pure HTML content into the container
      containerRef.current.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Emmanuel - Portfolio</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* General Styles */
    :root {
      --developer-color: #1a52c4;
      --developer-gradient: linear-gradient(135deg, #0d47a1, #42a5f5);
      --forex-gradient: linear-gradient(135deg, #ff4b2b, #ffb129);
      --crypto-gradient: linear-gradient(135deg, #222222, #ffb129);
    }
    
    body {
      font-family: 'Poppins', sans-serif;
      overflow-x: hidden;
    }
    
    section {
      padding: 100px 0;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 40px;
    }
    
    .section-title h2 {
      font-size: 2.5rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 15px;
    }
    
    .underline {
      height: 4px;
      width: 70px;
      background: var(--developer-color);
      margin: 0 auto;
    }
    
    .developer-text {
      color: var(--developer-color);
    }
    
    .forex-text {
      background: var(--forex-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .crypto-text {
      background: var(--crypto-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    /* Navbar */
    .navbar {
      background-color: rgba(0, 0, 0, 0.8);
      padding: 15px 0;
      transition: all 0.3s ease;
      position: fixed;
      width: 100%;
      z-index: 1000;
    }
    
    .navbar.scrolled {
      padding: 10px 0;
      background-color: rgba(0, 0, 0, 0.95);
    }
    
    .navbar-brand .logo {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 1px;
      color: #fff;
    }
    
    .nav-link {
      color: #fff !important;
      font-weight: 500;
      margin: 0 10px;
      transition: color 0.3s ease;
    }
    
    .nav-link:hover {
      color: var(--developer-color) !important;
    }
    
    /* Hero Section */
    .hero-section {
      height: 100vh;
      background: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1") no-repeat center center;
      background-size: cover;
      position: relative;
      color: #fff;
      display: flex;
      align-items: center;
    }
    
    .hero-section .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
    }
    
    .hero-section h1 {
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    
    .hero-section .lead {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }
    
    .btn-primary {
      background: var(--developer-gradient);
      border: none;
      padding: 12px 30px;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    
    .animated-text {
      animation: fadeInUp 1s ease-out;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* About Section */
    .about-section {
      background-color: #f8f9fa;
    }
    
    .about-card {
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      height: 100%;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .about-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    
    .developer-card {
      border-top: 5px solid var(--developer-color);
    }
    
    .forex-card {
      border-top: 5px solid #ff4b2b;
    }
    
    .crypto-card {
      border-top: 5px solid #ffb129;
    }
    
    .card-icon {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    
    .developer-card .card-icon {
      color: var(--developer-color);
    }
    
    .forex-card .card-icon {
      color: #ff4b2b;
    }
    
    .crypto-card .card-icon {
      color: #ffb129;
    }
    
    .about-card h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    /* Skills Section */
    .skills-section {
      background-color: #fff;
    }
    
    .skill-category h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    
    .skill-item {
      margin-bottom: 20px;
    }
    
    .skill-item p {
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .skill-bar-container {
      background-color: #f1f1f1;
      height: 10px;
      border-radius: 5px;
      overflow: hidden;
    }
    
    .skill-bar {
      height: 100%;
      border-radius: 5px;
      width: 0;
      transition: width 1.5s ease-in-out;
    }
    
    .skill-bar.animate {
      width: 100%;
    }
    
    .developer-bar {
      background: var(--developer-gradient);
    }
    
    .forex-bar {
      background: var(--forex-gradient);
    }
    
    .crypto-bar {
      background: var(--crypto-gradient);
    }
    
    /* Portfolio Section */
    .portfolio-section {
      background-color: #f8f9fa;
    }
    
    .portfolio-item {
      margin-bottom: 30px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    
    .portfolio-img {
      position: relative;
      overflow: hidden;
    }
    
    .portfolio-img img {
      transition: transform 0.5s ease;
      height: 250px;
      object-fit: cover;
      width: 100%;
    }
    
    .portfolio-item:hover .portfolio-img img {
      transform: scale(1.1);
    }
    
    .portfolio-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.8);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .portfolio-item:hover .portfolio-overlay {
      opacity: 1;
    }
    
    .developer-overlay {
      border-bottom: 5px solid var(--developer-color);
    }
    
    .forex-overlay {
      border-bottom: 5px solid #ff4b2b;
    }
    
    .crypto-overlay {
      border-bottom: 5px solid #ffb129;
    }
    
    .overlay-content {
      text-align: center;
      color: #fff;
      padding: 20px;
    }
    
    .overlay-content h4 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    .overlay-content p {
      margin-bottom: 15px;
      font-size: 0.9rem;
      opacity: 0.8;
    }
    
    /* Contact Section */
    .contact-section {
      background-color: #fff;
    }
    
    .contact-info {
      height: 100%;
      padding: 30px;
      background-color: #f8f9fa;
      border-radius: 10px;
    }
    
    .contact-info h3 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
    
    .contact-details {
      margin-top: 30px;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    
    .contact-item i {
      font-size: 1.2rem;
      color: var(--developer-color);
      margin-right: 15px;
      width: 20px;
    }
    
    .social-links {
      display: flex;
      margin-top: 30px;
    }
    
    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: #f1f1f1;
      border-radius: 50%;
      margin-right: 15px;
      color: #333;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .social-icon:hover {
      background: var(--developer-gradient);
      color: #fff;
      transform: translateY(-3px);
    }
    
    .contact-form {
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }
    
    .form-control {
      height: 50px;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
      padding: 10px 15px;
    }
    
    .form-control:focus {
      border-color: var(--developer-color);
      box-shadow: none;
    }
    
    textarea.form-control {
      min-height: 150px;
    }
    
    /* Footer */
    .footer {
      background-color: #222;
      color: #fff;
      padding: 30px 0;
    }
    
    .footer .logo {
      color: #fff;
      font-weight: 700;
    }
    
    /* Media Queries */
    @media (max-width: 991px) {
      .hero-section h1 {
        font-size: 3rem;
      }
      
      .hero-section .lead {
        font-size: 1.2rem;
      }
    }
    
    @media (max-width: 767px) {
      .hero-section h1 {
        font-size: 2.5rem;
      }
      
      .section-title h2 {
        font-size: 2rem;
      }
      
      .contact-info {
        margin-bottom: 30px;
      }
      
      .footer {
        text-align: center;
      }
      
      .footer .text-md-end {
        text-align: center !important;
        margin-top: 10px;
      }
    }
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <span class="logo">emma_fz</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero-section">
    <div class="overlay"></div>
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-md-12 text-center">
          <h1 class="animated-text">Hi, I'm Emmanuel</h1>
          <p class="lead mb-4">
            A <span class="developer-text">Full-Stack Developer</span>, 
            <span class="forex-text">Forex Trader</span>, and 
            <span class="crypto-text">Crypto Trader</span>
          </p>
          <a href="#portfolio" class="btn btn-primary btn-lg">View My Work</a>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about-section py-5">
    <div class="container">
      <div class="section-title">
        <h2>About Me</h2>
        <div class="underline"></div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 mb-4">
          <div class="about-card developer-card">
            <div class="card-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3>Full-Stack Developer</h3>
            <p>I build responsive and dynamic websites with clean, efficient, and maintainable code. My expertise includes developing full-stack applications, optimizing performance, and implementing secure API integrations.</p>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="about-card forex-card">
            <div class="card-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Forex Trader</h3>
            <p>Leveraging SMC and ICT strategies to analyze and trade currency markets. I use technical analysis on TradingView and MT5 platforms with a strong focus on risk management to maximize returns.</p>
          </div>
        </div>
        <div class="col-lg-4 mb-4">
          <div class="about-card crypto-card">
            <div class="card-icon">
              <i class="fab fa-bitcoin"></i>
            </div>
            <h3>Crypto Trader</h3>
            <p>I navigate the cryptocurrency markets using both technical and fundamental analysis. My experience includes DeFi protocols, market analysis, and developing strategies for long-term and short-term crypto investments.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <div class="section-title">
        <h2>My Skills</h2>
        <div class="underline"></div>
      </div>
      
      <div class="skill-category mt-5">
        <h3 class="developer-text">Full-Stack Development</h3>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="skill-item">
              <p>HTML & CSS</p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="95%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>JavaScript</p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="90%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>React & Angular</p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="85%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>Node.js & Express</p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="80%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>MongoDB & SQL</p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="75%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>API Integration</p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skill-category mt-5">
        <h3 class="forex-text">Forex Trading</h3>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="skill-item">
              <p>SMC Strategy</p>
              <div class="skill-bar-container">
                <div class="skill-bar forex-bar" data-width="90%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>ICT Strategy</p>
              <div class="skill-bar-container">
                <div class="skill-bar forex-bar" data-width="85%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>Risk Management</p>
              <div class="skill-bar-container">
                <div class="skill-bar forex-bar" data-width="95%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>Technical Analysis</p>
              <div class="skill-bar-container">
                <div class="skill-bar forex-bar" data-width="90%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skill-category mt-5">
        <h3 class="crypto-text">Crypto Trading</h3>
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="skill-item">
              <p>Market Analysis</p>
              <div class="skill-bar-container">
                <div class="skill-bar crypto-bar" data-width="85%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>DeFi Protocols</p>
              <div class="skill-bar-container">
                <div class="skill-bar crypto-bar" data-width="80%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>Blockchain Fundamentals</p>
              <div class="skill-bar-container">
                <div class="skill-bar crypto-bar" data-width="90%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>NFTs & Web3</p>
              <div class="skill-bar-container">
                <div class="skill-bar crypto-bar" data-width="75%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section id="portfolio" class="portfolio-section py-5">
    <div class="container">
      <div class="section-title">
        <h2>My Portfolio</h2>
        <div class="underline"></div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 mb-4">
          <div class="portfolio-item">
            <div class="portfolio-img">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Web Project" class="img-fluid" />
              <div class="portfolio-overlay developer-overlay">
                <div class="overlay-content">
                  <h4>E-Commerce Platform</h4>
                  <p>Full-Stack Development</p>
                  <a href="#" class="btn btn-light btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="View Details">
                    <i class="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="portfolio-item">
            <div class="portfolio-img">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Web App" class="img-fluid" />
              <div class="portfolio-overlay developer-overlay">
                <div class="overlay-content">
                  <h4>Task Management App</h4>
                  <p>Full-Stack Development</p>
                  <a href="#" class="btn btn-light btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="View Details">
                    <i class="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="portfolio-item">
            <div class="portfolio-img">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Mobile App" class="img-fluid" />
              <div class="portfolio-overlay developer-overlay">
                <div class="overlay-content">
                  <h4>Fitness Tracker</h4>
                  <p>Mobile App Development</p>
                  <a href="#" class="btn btn-light btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="View Details">
                    <i class="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="portfolio-item">
            <div class="portfolio-img">
              <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="Forex Analysis" class="img-fluid" />
              <div class="portfolio-overlay forex-overlay">
                <div class="overlay-content">
                  <h4>EUR/USD Analysis</h4>
                  <p>Forex Trading</p>
                  <a href="#" class="btn btn-light btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="View Details">
                    <i class="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="portfolio-item">
            <div class="portfolio-img">
              <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" alt="Crypto Analysis" class="img-fluid" />
              <div class="portfolio-overlay crypto-overlay">
                <div class="overlay-content">
                  <h4>Bitcoin Market Analysis</h4>
                  <p>Crypto Trading</p>
                  <a href="#" class="btn btn-light btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="View Details">
                    <i class="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="portfolio-item">
            <div class="portfolio-img">
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="DeFi Project" class="img-fluid" />
              <div class="portfolio-overlay crypto-overlay">
                <div class="overlay-content">
                  <h4>DeFi Dashboard</h4>
                  <p>Crypto Project</p>
                  <a href="#" class="btn btn-light btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="View Details">
                    <i class="fas fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section py-5">
    <div class="container">
      <div class="section-title">
        <h2>Contact Me</h2>
        <div class="underline"></div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6 mb-4">
          <div class="contact-info">
            <h3>Get In Touch</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
            <div class="contact-details mt-4">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <p>emmanuel@email.com</p>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <p>+1 234 567 890</p>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <p>New York, USA</p>
              </div>
            </div>
            <div class="social-links mt-4">
              <a href="#" class="social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <form class="contact-form">
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="Your Name" required />
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" placeholder="Your Email" required />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="Subject" />
            </div>
            <div class="mb-3">
              <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="mb-0">© 2025 <span class="logo">emma_fz</span>. All Rights Reserved.</p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="mb-0">Designed & Built with <i class="fas fa-heart text-danger"></i></p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bootstrap & Custom Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Skill bars animation
    function animateSkills() {
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (barPosition < screenPosition) {
          bar.style.width = bar.dataset.width;
        }
      });
    }

    window.addEventListener('scroll', animateSkills);
    window.addEventListener('load', animateSkills);

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
      });
    }
  </script>
</body>
</html>
      `;
      
      // Initialize any JavaScript that needs to run after the HTML is injected
      const script = document.createElement('script');
      script.innerHTML = `
        // Bootstrap bundle needs to be loaded manually since we're injecting HTML
        if (!window.bootstrap) {
          const bootstrapScript = document.createElement('script');
          bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
          bootstrapScript.onload = function() {
            // Initialize tooltips once Bootstrap is loaded
            if (window.bootstrap && window.bootstrap.Tooltip) {
              const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
              [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
            }
          };
          document.body.appendChild(bootstrapScript);
        }
        
        // Make sure the skill bars animate
        function animateSkillBars() {
          const skillBars = document.querySelectorAll('.skill-bar');
          skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (barPosition < screenPosition) {
              bar.style.width = bar.dataset.width;
            }
          });
        }
        
        window.addEventListener('scroll', animateSkillBars);
        setTimeout(animateSkillBars, 100); // Initial animation
      `;
      document.body.appendChild(script);
    }
  }, []);
  
  // Apply some basic styles to make the HTML container take up the full page
  return (
    <div 
      ref={containerRef} 
      style={{ 
        margin: 0, 
        padding: 0, 
        width: "100vw", 
        minHeight: "100vh", 
        maxWidth: "none",
        overflow: "hidden"
      }}
      className="html-container"
    ></div>
  );
};

export default Index;
