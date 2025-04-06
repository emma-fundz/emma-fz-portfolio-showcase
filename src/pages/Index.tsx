
import { useEffect, useRef } from "react";
import "../styles/bootstrap.min.css";

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
      scroll-behavior: smooth;
    }
    
    section {
      padding: 100px 0;
      position: relative;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 60px;
      position: relative;
      z-index: 1;
    }
    
    .section-title h2 {
      font-size: 2.8rem;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 15px;
      position: relative;
      display: inline-block;
    }
    
    .section-title h2::before {
      content: '';
      position: absolute;
      width: 40%;
      height: 10px;
      border-radius: 5px;
      background: var(--developer-gradient);
      bottom: -15px;
      left: 30%;
    }
    
    .underline {
      height: 4px;
      width: 70px;
      background: var(--developer-color);
      margin: 0 auto;
      position: relative;
    }
    
    .underline::before, .underline::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--developer-color);
      top: -3px;
    }
    
    .underline::before {
      left: -5px;
    }
    
    .underline::after {
      right: -5px;
    }
    
    .developer-text {
      color: var(--developer-color);
      font-weight: 700;
    }
    
    .forex-text {
      background: var(--forex-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }
    
    .crypto-text {
      background: var(--crypto-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }
    
    /* Navbar */
    .navbar {
      background-color: rgba(0, 0, 0, 0.8);
      padding: 15px 0;
      transition: all 0.3s ease;
      position: fixed;
      width: 100%;
      z-index: 1000;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
      position: relative;
      padding-bottom: 5px;
    }
    
    .navbar-brand .logo::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--developer-gradient);
      transition: width 0.3s ease;
    }
    
    .navbar-brand:hover .logo::after {
      width: 100%;
    }
    
    .nav-link {
      color: #fff !important;
      font-weight: 500;
      margin: 0 10px;
      position: relative;
      padding: 5px 0;
      transition: color 0.3s ease;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--developer-gradient);
      transition: width 0.3s ease;
    }
    
    .nav-link:hover {
      color: var(--developer-color) !important;
    }
    
    .nav-link:hover::after {
      width: 100%;
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
      overflow: hidden;
    }
    
    .hero-section .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(26,82,196,0.8) 100%);
    }
    
    .hero-section h1 {
      font-size: 4.5rem;
      font-weight: 800;
      margin-bottom: 20px;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
      letter-spacing: 1px;
    }
    
    .hero-section .lead {
      font-size: 1.8rem;
      margin-bottom: 30px;
      letter-spacing: 0.5px;
      line-height: 1.6;
    }
    
    .btn-primary {
      background: var(--developer-gradient);
      border: none;
      padding: 15px 35px;
      font-weight: 600;
      letter-spacing: 1px;
      border-radius: 50px;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: all 0.5s ease;
      box-shadow: 0 10px 20px rgba(13, 71, 161, 0.3);
    }
    
    .btn-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      transition: all 0.5s ease;
      z-index: -1;
    }
    
    .btn-primary:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(13, 71, 161, 0.4);
    }
    
    .btn-primary:hover::before {
      width: 100%;
    }
    
    .animated-text {
      animation: fadeInUp 1s ease-out;
      position: relative;
    }
    
    .animated-text::after {
      content: '|';
      position: absolute;
      right: -10px;
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
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
      position: relative;
      overflow: hidden;
    }
    
    .about-section::before {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(13, 71, 161, 0.1), rgba(66, 165, 245, 0.1));
      top: -100px;
      left: -100px;
      z-index: 0;
    }
    
    .about-section::after {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(255, 75, 43, 0.1), rgba(255, 177, 41, 0.1));
      bottom: -150px;
      right: -150px;
      z-index: 0;
    }
    
    .about-card {
      background-color: #fff;
      padding: 40px 30px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      height: 100%;
      transition: all 0.5s ease;
      position: relative;
      z-index: 1;
      overflow: hidden;
    }
    
    .about-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
      transition: all 0.5s ease;
      z-index: -1;
    }
    
    .about-card:hover {
      transform: translateY(-15px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .about-card:hover::before {
      height: 100%;
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
      font-size: 3rem;
      margin-bottom: 30px;
      position: relative;
      display: inline-block;
      transition: all 0.5s ease;
    }
    
    .card-icon::after {
      content: '';
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(0,0,0,0.05);
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.5s ease;
    }
    
    .about-card:hover .card-icon {
      transform: rotateY(360deg);
    }
    
    .about-card:hover .card-icon::after {
      width: 70px;
      height: 70px;
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
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 20px;
      position: relative;
      display: inline-block;
    }
    
    .about-card h3::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      background: #f1f1f1;
      bottom: -10px;
      left: 25%;
      transition: all 0.5s ease;
    }
    
    .developer-card:hover h3::after {
      background: var(--developer-gradient);
      width: 100%;
      left: 0;
    }
    
    .forex-card:hover h3::after {
      background: var(--forex-gradient);
      width: 100%;
      left: 0;
    }
    
    .crypto-card:hover h3::after {
      background: var(--crypto-gradient);
      width: 100%;
      left: 0;
    }
    
    .about-card p {
      margin-top: 20px;
      line-height: 1.8;
      color: #666;
    }
    
    /* Skills Section */
    .skills-section {
      background-color: #fff;
      position: relative;
      overflow: hidden;
    }
    
    .skills-section::before {
      content: '';
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(13, 71, 161, 0.05), rgba(66, 165, 245, 0.05));
      top: -200px;
      right: -200px;
      z-index: 0;
    }
    
    .skill-category {
      position: relative;
      z-index: 1;
      background-color: #f8f9fa;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      margin-bottom: 40px;
      transition: all 0.5s ease;
    }
    
    .skill-category:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }
    
    .skill-category h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
      position: relative;
      display: inline-block;
    }
    
    .skill-category h3::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      bottom: -10px;
      left: 0;
      transition: all 0.5s ease;
    }
    
    .developer-text::after {
      background: var(--developer-gradient);
    }
    
    .forex-text::after {
      background: var(--forex-gradient);
    }
    
    .crypto-text::after {
      background: var(--crypto-gradient);
    }
    
    .skill-item {
      margin-bottom: 25px;
    }
    
    .skill-item p {
      font-weight: 600;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }
    
    .skill-item p span {
      font-weight: 700;
      opacity: 0;
      transition: all 0.5s ease;
    }
    
    .skill-bar-container {
      background-color: #e9ecef;
      height: 10px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    }
    
    .skill-bar {
      height: 100%;
      border-radius: 10px;
      width: 0;
      position: relative;
      transition: width 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    
    .skill-bar::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 5px;
      height: 100%;
      background: rgba(255,255,255,0.3);
      border-radius: 10px;
    }
    
    .skill-bar.animate {
      width: var(--percent);
    }
    
    .skill-item.animate p span {
      opacity: 1;
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
    .works-section {
      background-color: #f8f9fa;
      position: relative;
      overflow: hidden;
    }
    
    .works-section::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(34, 34, 34, 0.05), rgba(255, 177, 41, 0.05));
      bottom: -150px;
      left: -150px;
      z-index: 0;
    }
    
    .portfolio-item {
      margin-bottom: 30px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      position: relative;
      z-index: 1;
      transition: all 0.5s ease;
    }
    
    .portfolio-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }
    
    .portfolio-img {
      position: relative;
      overflow: hidden;
    }
    
    .portfolio-img img {
      transition: transform 0.8s ease;
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
      transition: opacity 0.5s ease;
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
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.5s ease 0.2s;
    }
    
    .portfolio-item:hover .overlay-content {
      transform: translateY(0);
      opacity: 1;
    }
    
    .overlay-content h4 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    .overlay-content p {
      margin-bottom: 20px;
      font-size: 1rem;
      opacity: 0.9;
    }
    
    .overlay-content .btn {
      background: transparent;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50px;
      padding: 8px 20px;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .overlay-content .btn:hover {
      background: #fff;
      color: #000;
    }
    
    /* Testimonials Section */
    .testimonials-section {
      background-color: #fff;
      position: relative;
      overflow: hidden;
    }
    
    .testimonials-section::before {
      content: '';
      position: absolute;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(255, 75, 43, 0.05), rgba(255, 177, 41, 0.05));
      top: -200px;
      left: -200px;
      z-index: 0;
    }
    
    .testimonial-item {
      padding: 40px 30px;
      background-color: #f8f9fa;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      margin: 20px 15px;
      position: relative;
      z-index: 1;
      transition: all 0.5s ease;
    }
    
    .testimonial-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    .testimonial-item::before {
      content: '"';
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 6rem;
      font-family: 'Georgia', serif;
      color: rgba(0,0,0,0.05);
      line-height: 1;
      z-index: -1;
    }
    
    .testimonial-item .quote {
      font-style: italic;
      margin-bottom: 20px;
      line-height: 1.8;
      color: #555;
      position: relative;
      z-index: 1;
    }
    
    .client-info {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }
    
    .client-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 15px;
      border: 3px solid #fff;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .client-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .client-details h5 {
      margin: 0;
      font-weight: 700;
      font-size: 1.1rem;
      color: #333;
    }
    
    .client-details p {
      margin: 5px 0 0;
      font-size: 0.9rem;
      color: #777;
    }
    
    .rating {
      color: #ffc107;
      font-size: 0.9rem;
      margin-top: 5px;
    }
    
    /* Contact Section */
    .contact-section {
      background-color: #fff;
      position: relative;
      overflow: hidden;
    }
    
    .contact-section::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(13, 71, 161, 0.05), rgba(66, 165, 245, 0.05));
      bottom: -150px;
      right: -150px;
      z-index: 0;
    }
    
    .contact-info {
      height: 100%;
      padding: 40px;
      background-color: #f8f9fa;
      border-radius: 20px;
      position: relative;
      z-index: 1;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      transition: all 0.5s ease;
    }
    
    .contact-info:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    .contact-info h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
      position: relative;
      display: inline-block;
    }
    
    .contact-info h3::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      background: var(--developer-gradient);
      bottom: -10px;
      left: 0;
      transition: all 0.5s ease;
    }
    
    .contact-info:hover h3::after {
      width: 100%;
    }
    
    .contact-details {
      margin-top: 40px;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      transition: all 0.3s ease;
    }
    
    .contact-item:hover {
      transform: translateX(10px);
    }
    
    .contact-item i {
      font-size: 1.4rem;
      color: var(--developer-color);
      margin-right: 20px;
      width: 40px;
      height: 40px;
      background: rgba(26, 82, 196, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .contact-item:hover i {
      background: var(--developer-color);
      color: #fff;
      transform: rotateY(360deg);
    }
    
    .contact-item p {
      margin: 0;
      font-weight: 500;
      color: #555;
    }
    
    .social-links {
      display: flex;
      margin-top: 40px;
    }
    
    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      background-color: #f1f1f1;
      border-radius: 50%;
      margin-right: 15px;
      color: #333;
      text-decoration: none;
      transition: all 0.5s ease;
      position: relative;
      overflow: hidden;
    }
    
    .social-icon::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--developer-gradient);
      border-radius: 50%;
      transform: scale(0);
      transition: all 0.5s ease;
      z-index: -1;
    }
    
    .social-icon:hover {
      color: #fff;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    
    .social-icon:hover::before {
      transform: scale(1);
    }
    
    .contact-form {
      background-color: #fff;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      position: relative;
      z-index: 1;
      transition: all 0.5s ease;
    }
    
    .contact-form:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    .form-group {
      margin-bottom: 25px;
    }
    
    .form-control {
      height: 55px;
      border-radius: 10px;
      border: 2px solid #e0e0e0;
      padding: 10px 20px;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .form-control:focus {
      border-color: var(--developer-color);
      box-shadow: 0 0 15px rgba(26, 82, 196, 0.1);
    }
    
    textarea.form-control {
      min-height: 150px;
      resize: none;
    }
    
    .contact-form .btn-primary {
      width: 100%;
    }
    
    /* Footer */
    .footer {
      background-color: #222;
      color: #fff;
      padding: 50px 0 30px;
      position: relative;
      overflow: hidden;
    }
    
    .footer::before {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.02);
      top: -100px;
      left: -100px;
    }
    
    .footer::after {
      content: '';
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.02);
      bottom: -50px;
      right: -50px;
    }
    
    .footer .logo {
      color: #fff;
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 20px;
      display: inline-block;
      position: relative;
    }
    
    .footer .logo::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 3px;
      background: var(--developer-gradient);
      bottom: -10px;
      left: 0;
      transition: all 0.5s ease;
    }
    
    .footer p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.8;
      margin-bottom: 0;
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-links li {
      margin-bottom: 15px;
    }
    
    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      padding-left: 15px;
    }
    
    .footer-links a::before {
      content: '→';
      position: absolute;
      left: 0;
      top: 0;
      transition: all 0.3s ease;
    }
    
    .footer-links a:hover {
      color: #fff;
      padding-left: 20px;
    }
    
    .footer-links a:hover::before {
      color: var(--developer-color);
    }
    
    .footer-heading {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 25px;
      color: #fff;
      position: relative;
      display: inline-block;
    }
    
    .footer-heading::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 3px;
      background: var(--developer-gradient);
      bottom: -10px;
      left: 0;
    }
    
    .footer-contact {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
    }
    
    .footer-contact i {
      color: var(--developer-color);
      margin-right: 15px;
      font-size: 1.1rem;
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 20px;
      margin-top: 40px;
    }
    
    .footer-social {
      margin-top: 20px;
      display: flex;
    }
    
    .footer-social a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
      margin-right: 10px;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: all 0.5s ease;
      position: relative;
      overflow: hidden;
    }
    
    .footer-social a::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--developer-gradient);
      border-radius: 50%;
      transform: scale(0);
      transition: all 0.5s ease;
      z-index: -1;
    }
    
    .footer-social a:hover {
      color: #fff;
      transform: translateY(-5px);
    }
    
    .footer-social a:hover::before {
      transform: scale(1);
    }
    
    /* Media Queries */
    @media (max-width: 1199px) {
      .hero-section h1 {
        font-size: 3.5rem;
      }
      
      .hero-section .lead {
        font-size: 1.5rem;
      }
    }
    
    @media (max-width: 991px) {
      section {
        padding: 80px 0;
      }
      
      .hero-section h1 {
        font-size: 3rem;
      }
      
      .hero-section .lead {
        font-size: 1.3rem;
      }
      
      .section-title h2 {
        font-size: 2.2rem;
      }
      
      .about-card {
        margin-bottom: 30px;
      }
      
      .contact-info {
        margin-bottom: 30px;
      }
    }
    
    @media (max-width: 767px) {
      section {
        padding: 60px 0;
      }
      
      .hero-section {
        height: auto;
        min-height: 100vh;
      }
      
      .hero-section h1 {
        font-size: 2.5rem;
      }
      
      .hero-section .lead {
        font-size: 1.2rem;
      }
      
      .section-title h2 {
        font-size: 2rem;
      }
      
      .about-card {
        padding: 30px 20px;
      }
      
      .skill-category {
        padding: 20px;
      }
      
      .skill-category h3 {
        font-size: 1.5rem;
      }
      
      .contact-form,
      .contact-info {
        padding: 30px 20px;
      }
      
      .footer {
        text-align: center;
      }
      
      .footer-heading::after {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .footer-social {
        justify-content: center;
      }
      
      .footer-contact {
        justify-content: center;
      }
      
      .footer-contact i {
        margin-right: 10px;
      }
      
      .footer-links a::before {
        display: none;
      }
      
      .footer-links a {
        padding-left: 0;
      }
      
      .footer-links a:hover {
        padding-left: 0;
      }
      
      .footer .logo::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    @media (max-width: 575px) {
      .hero-section h1 {
        font-size: 2rem;
      }
      
      .hero-section .lead {
        font-size: 1.1rem;
      }
      
      .section-title h2 {
        font-size: 1.8rem;
      }
      
      .btn-primary {
        padding: 12px 25px;
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
            <a class="nav-link" href="#works">My Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonials">Testimonials</a>
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
          <a href="#works" class="btn btn-primary btn-lg">View My Work</a>
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
              <p>HTML & CSS <span>95%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="95%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>JavaScript <span>90%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="90%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>React & Angular <span>85%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="85%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>Node.js & Express <span>80%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="80%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>MongoDB & SQL <span>75%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar developer-bar" data-width="75%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>API Integration <span>85%</span></p>
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
              <p>SMC Strategy <span>90%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar forex-bar" data-width="90%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>ICT Strategy <span>85%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar forex-bar" data-width="85%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>Risk Management <span>95%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar forex-bar" data-width="95%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>Technical Analysis <span>90%</span></p>
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
              <p>Market Analysis <span>85%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar crypto-bar" data-width="85%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>DeFi Protocols <span>80%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar crypto-bar" data-width="80%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>Blockchain Fundamentals <span>90%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar crypto-bar" data-width="90%"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="skill-item">
              <p>NFTs & Web3 <span>75%</span></p>
              <div class="skill-bar-container">
                <div class="skill-bar crypto-bar" data-width="75%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Works Section (renamed from Portfolio) -->
  <section id="works" class="works-section py-5">
    <div class="container">
      <div class="section-title">
        <h2>My Works</h2>
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
                  <a href="#" class="btn btn-sm">
                    <i class="fas fa-eye me-2"></i>View Details
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
                  <a href="#" class="btn btn-sm">
                    <i class="fas fa-eye me-2"></i>View Details
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
                  <a href="#" class="btn btn-sm">
                    <i class="fas fa-eye me-2"></i>View Details
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
                  <a href="#" class="btn btn-sm">
                    <i class="fas fa-eye me-2"></i>View Details
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
                  <a href="#" class="btn btn-sm">
                    <i class="fas fa-eye me-2"></i>View Details
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
                  <a href="#" class="btn btn-sm">
                    <i class="fas fa-eye me-2"></i>View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section (NEW) -->
  <section id="testimonials" class="testimonials-section py-5">
    <div class="container">
      <div class="section-title">
        <h2>Testimonials</h2>
        <div class="underline"></div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="testimonial-item">
            <p class="quote">"Emmanuel delivered an outstanding e-commerce platform for our business. His attention to detail and technical expertise truly impressed us. The site is not only beautiful but also performs exceptionally well."</p>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="client-info">
              <div class="client-img">
                <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Client">
              </div>
              <div class="client-details">
                <h5>David Wilson</h5>
                <p>CEO, TechRetail</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="testimonial-item">
            <p class="quote">"Working with Emmanuel on our financial dashboard was a game-changer. His deep understanding of both web development and financial markets created a perfect synergy for our project."</p>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="client-info">
              <div class="client-img">
                <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Client">
              </div>
              <div class="client-details">
                <h5>Sarah Johnson</h5>
                <p>CTO, FinanceHub</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="testimonial-item">
            <p class="quote">"Emmanuel's crypto trading insights and the analysis platform he built for us have been invaluable. His technical skills combined with market knowledge make him a rare find in the industry."</p>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <div class="client-info">
              <div class="client-img">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client">
              </div>
              <div class="client-details">
                <h5>Michael Chen</h5>
                <p>Founder, CryptoVest</p>
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
                <p>emmafund1984@gmail.com</p>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <p>+1 904 677 9204</p>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            <div class="social-links mt-4">
              <a href="https://www.linkedin.com/" target="_blank" class="social-icon" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank" class="social-icon" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" class="social-icon" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" class="social-icon" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/qr/GSNUZMNZLAJ3D1" target="_blank" class="social-icon" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.snapchat.com/add/emma_fundfx?share_id=bkvfDiYmOOY&locale=en-US" target="_blank" class="social-icon" title="Snapchat">
                <i class="fab fa-snapchat-ghost"></i>
              </a>
              <a href="https://t.me/emma_fundz" target="_blank" class="social-icon" title="Telegram">
                <i class="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <input type="text" class="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="subject" placeholder="Subject" />
            </div>
            <div class="form-group">
              <textarea class="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
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
      <div class="row mb-4">
        <div class="col-lg-4 col-md-6 mb-4">
          <span class="logo">emma_fz</span>
          <p class="mt-3">Full-Stack Developer, Forex Trader, and Crypto Trader. Turning visions into reality with code and market expertise.</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://wa.me/qr/GSNUZMNZLAJ3D1" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="https://t.me/emma_fundz" target="_blank"><i class="fab fa-telegram-plane"></i></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#works">My Works</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h4 class="footer-heading">Contact Info</h4>
          <div class="footer-contact">
            <i class="fas fa-envelope"></i>
            <p>emmafund1984@gmail.com</p>
          </div>
          <div class="footer-contact">
            <i class="fas fa-phone"></i>
            <p>+1 904 677 9204</p>
          </div>
          <div class="footer-contact">
            <i class="fas fa-map-marker-alt"></i>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="row">
          <div class="col-md-6">
            <p class="mb-0">© 2025 <span class="logo">emma_fz</span>. All Rights Reserved.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="mb-0">Designed & Built with <i class="fas fa-heart text-danger"></i></p>
          </div>
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
        
        // Close the mobile menu when a link is clicked
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      });
    });

    // Skill bars animation
    function animateSkills() {
      const skillItems = document.querySelectorAll('.skill-item');
      skillItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (itemPosition < screenPosition) {
          const skillBar = item.querySelector('.skill-bar');
          const width = skillBar.getAttribute('data-width');
          skillBar.style.width = width;
          item.classList.add('animate');
        }
      });
    }

    // Animation on scroll for other elements
    function animateOnScroll() {
      const elements = document.querySelectorAll('.about-card, .portfolio-item, .testimonial-item, .contact-info, .contact-form');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1;
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }
    
    // Set initial opacity and transform for animation elements
    document.addEventListener('DOMContentLoaded', function() {
      const elements = document.querySelectorAll('.about-card, .portfolio-item, .testimonial-item, .contact-info, .contact-form');
      elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.8s ease';
      });
      
      // Initial animation call
      animateSkills();
      animateOnScroll();
    });

    window.addEventListener('scroll', function() {
      animateSkills();
      animateOnScroll();
    });

    // Form submission - Updated to redirect to WhatsApp
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create WhatsApp message
        const whatsappMessage = \`Hello Emmanuel, my name is \${name}. 
Email: \${email} 
Subject: \${subject} 
Message: \${message}\`;
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp URL
        const whatsappURL = \`https://wa.me/9046779204?text=\${encodedMessage}\`;
        
        // Show success message
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success mt-3';
        alertDiv.textContent = 'Redirecting to WhatsApp...';
        contactForm.appendChild(alertDiv);
        
        // Open WhatsApp in a new window
        setTimeout(() => {
          window.open(whatsappURL, '_blank');
          
          // Reset form
          contactForm.reset();
          
          // Remove alert after 3 seconds
          setTimeout(() => {
            alertDiv.remove();
          }, 3000);
        }, 1000);
      });
    }
    
    // Typing animation effect
    function typeEffect(element, text, speed) {
      let i = 0;
      const timer = setInterval(function() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            element.textContent = '';
            typeEffect(element, text, speed);
          }, 2000);
        }
      }, speed);
    }
    
    // Apply typing effect to hero heading
    setTimeout(() => {
      const heroHeading = document.querySelector('.hero-section h1');
      if (heroHeading) {
        const originalText = heroHeading.textContent;
        heroHeading.textContent = '';
        typeEffect(heroHeading, originalText, 100);
      }
    }, 1000);
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
              bar.style.width = bar.getAttribute('data-width');
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
