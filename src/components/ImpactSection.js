import React, { useState } from "react";
import "./ImpactSection.css"; // Add your CSS file for styling

const ImpactSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "Silvertoons",
      description: "Creating impactful and value-driven animation content",
      bgColor: "#555",
    },
    {
      title: "Avatr",
      description: "Pioneering the future of global healthcare",
      bgColor: "#A6B8B1",
    },
    {
      title: "TechSphere",
      description: "Innovating cutting-edge technology solutions",
      bgColor: "#4B6584",
    },
    {
      title: "EduCore",
      description: "Shaping the future of education technology",
      bgColor: "#E0A458",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? cards.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === cards.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="impact-section">
      {/* Video Background */}
      <video className="background-video" autoPlay loop muted>
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="content-overlay">
        <div className="font-[Blacker] text-gray-800 mb-4 text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] leading-[150%]">
          {/* <h1>Making an Impact</h1> */}
          <p>
            At KLAS Infotech, our projects are more than initiatives; they are milestones
            on the path to digital transformation. Discover how we collaborate with
            visionary companies to create impactful solutions.
          </p>
          <button className="view-projects-button">View All Projects</button>
        </div>

        {/* Projects Section */}
        <div className="projects-slider-container">
          <button className="slider-btn prev-btn" onClick={handlePrev}>
            ←
          </button>

          <div className="projects-slider">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`project-card ${index === currentSlide ? "active" : ""}`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  backgroundColor: card.bgColor,
                }}
              >
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            ))}
          </div>

          <button className="slider-btn next-btn" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
