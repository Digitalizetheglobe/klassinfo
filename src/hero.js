import React, { useState } from "react";
import "./hero.css"; 
import videoHero from "../src/assets/video/hero.mp4";
import yourImage from './assets/images/klas.png'; // Adjust the path
import LegacyScrollBar from "./components/LegacyScrollBar";
// import Timeline from "./components/Timeline";
// import LeadershipAndLegacy from "./components/LeadershipAndLegacy";
import Service from "./components/Service";
// import ImpactSection from "./components/ImpactSection";
// import Weserve from "./components/Weserver";
// import { TimelineDemo } from "./test";
import { AnimatedTestimonialsDemo } from "./test2";
import Product from "./components/Product";
import Footer from "./footer";
// import MenuBar from "./menu";
// import Blogs from "./components/LeadershipAndLegacy";
import { X } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.css';
// import MenuBar from "./menu";

const Hero = () => {

  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' }, // Scroll to About section
    { name: 'Leadership', path: '#legacy-scrollbar' }, // Scroll to Leadership And Legacy section
    { name: 'Values', path: '#product' },
    { name: 'Solutions', path: '#product' }, // Scroll to Solutions section
    { name: 'Making an Impact', path: '#service' },
    // { name: 'Making an Impact', path: '#animated' },
  ];

  const getBackgroundColor = () => {
    switch (activeItem) {
      case 'Home':
        return 'bg-[#0d3b4f]';
      case 'About':
        return 'bg-[#0d3b4f]';
      case 'Leadership And Legacy':
        return 'bg-[#0d3b4f]';
      case 'Values':
        return 'bg-[#0d3b4f]';
      case 'Solutions':
        return 'bg-[#0d3b4f]';
      case 'Making an Impact':
        return 'bg-[#0d3b4f]';
      default:
        return 'bg-[#0d3b4f]';
    }
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
    <div>
          {/* Button to open menu, shown only on Home page and when the menu is closed */}
          {window.location.pathname === '/' && !isMenuOpen && (
           <button
           className="fixed top-8 right-8 w-8 h-8 text-[#EFD49C] rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
           style={{ zIndex: 1000, border: '1px solid #EFD49C' }}
           onClick={() => {
             setIsMenuOpen(true); // Open the menu
             window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
           }}
         >
           <i className="fas fa-bars"></i>
         </button>
         
         
          
          )}
    
          {/* MenuBar container */}
          {isMenuOpen && (
            <div className={`min-h-screen ${getBackgroundColor()} transition-colors duration-300`}>
              <div className="container mx-auto px-4 pb-8 pt-12">
              <div className="flex justify-between items-center mb-8">
              <X
                className="w-7 h-7 text-white absolute cursor-pointer top-8 right-8"
                style={{
                  // left: '95%',
                  marginRight: window.innerWidth <= 768 ? '10px' : '0px', // Add margin only for mobile
                }}
                onClick={() => setIsMenuOpen(false)} // Close menu when clicked
              />

              </div>

                <nav className="flex flex-col items-center space-y-6 mt-[70px]">
                  {menuItems.map(({ name, path }) => (
                    <a
                      key={name}
                      href={path}
                      className={`font-bold text-white text-3xl hover:text-4xl transition-all duration-300`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (path.startsWith('#')) {
                          handleScroll(path.substring(1)); // Remove # from the path
                        } else {
                          window.location.href = path; // Use Link for other navigation
                        }
                        setActiveItem(name);
                        setIsMenuOpen(false); // Close the menu when an item is clicked
                      }}
                    >
                      {name.toUpperCase()}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      <section className="video-container">
        {/* Background Video */}
        {/* <MenuBar/> */}
       <div className="video-wrapper">
  <video className="hero-video" src={videoHero} autoPlay loop muted />
  <div className="video-overlay"></div>
</div>


        {/* Text Content */}
        <div className="content">
          <h1>KLAS</h1>
          <h4>INFOTECH</h4>
          <p>PURPOSE-DRIVEN ALLIANCES</p>
        </div>
         {/* <p>PURPOSE-DRIVEN ALLIANCES</p> */}
      </section>
      <div 
  style={{
    display: 'flex',         // Enables flexbox
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center',     // Centers vertically
    // height: '472px', 
    backgroundColor: '#12394C',

             // Takes full viewport height
  }}
>
<section id="about"> </section>
  <section 
    className="hero-section" 
   
    style={{ height: '100%', objectFit: 'cover' }}
  >
    <div className="hero-container">
      {/* Text Content */}
      <div className="hero-text">
        <h4>About Us</h4>
        <h2 >
          Driving Growth
          <br />
          And Innovation
        </h2>
        <p className="font-[Jost] text-justify" style={{ fontSize: '1.10rem', lineHeight: '2rem', }}>
          KLAS Infotech is a visionary partner for tech startups, empowering
          them to scale both locally and globally. Our focus lies in software
          and technology solutions that tackle impactful and real-world
          challenges.
        </p>
      </div>

      {/* Image */}
      <div className="card">
        <img
          src={yourImage}
          alt="Example"
          className="bg-image"
        />
        <div className="blob"></div>
      </div>
    </div>
  </section>
</div>


<section id="legacy-scrollbar"> </section>
<section > <LegacyScrollBar/></section>
<section id="product"> </section>
<section > <Product/></section>
<div 
style={{
  display: 'flex',         // Enables flexbox
  justifyContent: 'center', // Centers horizontally
  alignItems: 'center',     // Centers vertically
  // height: '472px', 
  // backgroundColor: '#12394C',
  
           // Takes full viewport height
}}
>
<section id="service"> </section>
<section > <Service/></section>
</div>

<section id="animated"> </section>
<section > <AnimatedTestimonialsDemo/></section>
<section id="footer"> <Footer/></section>
      
      
      </>
  );
};

export default Hero;
